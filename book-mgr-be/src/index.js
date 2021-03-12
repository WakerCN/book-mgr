const Koa = require('koa');

// const timeUtils = require('./helpers/utils/index');
// console.log(timeUtils.getYearByTimeStamp(new Date().getTime()));
// console.log(timeUtils.getMonthByTimeStamp(new Date().getTime()));

// 实例化
const app = new Koa();

// use() 来注册中间件
// 这里中间件是一个函数
// 每次请求中间件都会被执行一次
// context，当前请求的所有信息
app.use(async (context, next) => {
  const { request: req } = context;
  const { url } = req;
  if (url === '/') {
    context.body = '<h1>主页</h1>';
    return;
  }
  if (url === '/user') {
    context.body = '<h1>用户user首页</h1>';
    return;
  }
  context.body = '<h1>404</h1>';
  await next()
  context.status = 404;
});

app.use(async (context) => {
  context.body = '<h1>找不到资源</h1>';
});

// 开启一个http 服务
app.listen(3000, () => {
  console.log('book serve is running at localhost:3000');
});
