// 用来连接数据库

const mongoose = require('mongoose');

const connect = () => {
  return new Promise((resolve) => {
    // 1. 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr', { useNewUrlParser: true, useUnifiedTopology: true });

    // 2. 当数据库打开时，处理
    mongoose.connection.on('open', () => {
      console.log('>>> mongodb 数据库连接成功');
      resolve();
    });
  });
};

module.exports = {
  connect,
};
