const Router = require('@koa/router');
const mongoose = require('mongoose');
require('../../db/Schema/User');
const UserModel = mongoose.model('User');

const router = new Router({
  prefix: '/auth',
});

router.post('/login', async (context) => {
  context.body = '登录成功';
});

/**
 * 注册后台接口
 */
router.post('/register', async (context) => {
  const { username, password } = context.request.body;

  // 1. 先查找当前用户是否注册过
  const one = UserModel.findOne({
    password,
  }).exec();

  if (one) {
    context.body = {
      code: 0,
      msg: '用户已存在',
      data: null,
    };
    return;
  }

  const user = new UserModel({
    username,
    password,
  });

  const res = await user.save();

  context.body = {
    code: 1,
    msg: '注册成功',
    data: res,
  };
});

module.exports = router;
