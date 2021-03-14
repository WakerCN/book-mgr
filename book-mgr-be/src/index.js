const Koa = require('koa');
const { connect } = require('./db');
const koaBody = require('koa-body');
const registerRouter = require('./routers');

const cors = require('@koa/cors');

// 实例化
const app = new Koa();

connect().then(() => {
  // 解决跨域
  app.use(cors());

  app.use(koaBody());

  registerRouter(app);

  // 开启一个http 服务
  app.listen(3000, () => {
    console.log('>>> book serve is running at localhost:3000');
  });
});
