const auth = require('./auth');
const invite = require('./invite');

module.exports = (app) => {
  // 注册路由
  app.use(auth.routes());
  app.use(invite.routes());
};
