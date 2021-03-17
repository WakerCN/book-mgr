const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');
const jwt = require('jsonwebtoken');
// 引入并注册模型
require('../../db/Schema/User');
require('../../db/Schema/InviteCode');
// 取到对应的model
const UserModel = mongoose.model('User');
const InviteCodeModel = mongoose.model('InviteCode');

const router = new Router({
  prefix: '/auth',
});

/**
 * 登录后台接口
 */
router.post('/login', async (context) => {
  context.body = '登录成功';
  const { username, password } = getBody(context);

  if (username === '' || password === '') {
    context.body = {
      code: 0,
      msg: '字段不能为空',
      data: null,
    };
    return;
  }

  const one = await UserModel.findOne({
    username,
  }).exec();
  // 如果没有找到
  if (!one || one.password != password) {
    context.body = {
      code: 0,
      msg: '用户名或密码错误！',
      data: null,
    };
    return;
  }
  const user = {
    username: one.username,
    _id: one._id,
  };
  context.body = {
    code: 1,
    msg: '登录成功',
    data: {
      user,
      token: jwt.sign(user, 'book-mgr'),
    },
  };
});

/**
 * 注册后台接口
 */
router.post('/register', async (context) => {
  const { username, password, inviteCode } = getBody(context);

  if (username === '' || password === '' || inviteCode === '') {
    context.body = {
      code: 0,
      msg: '字段不能为空',
      data: null,
    };
    return;
  }

  // 1. 先查找当前用户是否注册过
  const findUser = await UserModel.findOne({
    username,
  }).exec();
  if (findUser) {
    context.body = {
      code: 0,
      msg: '用户已存在',
      data: null,
    };
    return;
  }

  // 2. 检测注册码是否出现过
  const findCode = await InviteCodeModel.findOne({
    code: inviteCode,
  }).exec();
  // 如果找不到邀请码
  if (!findCode) {
    context.body = {
      code: 0,
      msg: '注册码不正确',
      data: null,
    };
    return;
  }
  // 邀请码已经被使用过
  if (findCode.userID !== '') {
    context.body = {
      code: 0,
      msg: '邀请码已经使用过',
      data: null,
    };
    return;
  }
  const user = new UserModel({
    username,
    password,
    inviteCode,
  });

  const res = await user.save();

  // 邀请码同步到mongoDB邀请码表中
  findCode.userID = res._id;
  findCode.meta.updatedAt = new Date().getTime();
  await findCode.save();

  context.body = {
    code: 1,
    msg: '注册成功',
    data: res,
  };
});

module.exports = router;
