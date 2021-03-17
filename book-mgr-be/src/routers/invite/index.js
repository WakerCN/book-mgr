const Router = require('@koa/router');
const mongoose = require('mongoose');
const InviteCodeModel = mongoose.model('InviteCode');
const { v4: uuidv4 } = require('uuid');

const router = new Router({
  prefix: '/invite',
});

router.post('/add', async (context) => {
  // 1. 使用uuid生成一个随机的邀请码
  let inviteCode = uuidv4();
  const code = new InviteCodeModel({
    code: inviteCode,
    userID: '',
  });
  let saved = await code.save();
  console.log(`创建邀请码：${inviteCode}`);
  context.body = {
    code: 1,
    msg: '创建邀请码成功',
    data: saved,
  };
});

module.exports = router;
