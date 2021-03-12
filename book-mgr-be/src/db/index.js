// 用来连接数据库

const mongoose = require('mongoose');

// 哪个数据库？
// 哪个集合？
// 添加什么格式的文档

// Schema 映射MongoDB下的一个集合，内容为集合下文档的构成
// Model 可以理解成根据Schema创建的一套方法，这套方法操作MongoDB下的集合和和集合下的文档

const UserSchmea = new mongoose.Schema({
  nickname: String,
  password: String,
  age: Number,
});

const UserModel = mongoose.model('User', UserSchmea);

const connect = () => {
  // 1. 连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

  // 2. 当数据库打开时，处理
  mongoose.connection.on('open', () => {
    console.log('连接成功');
    
    const user1 = new UserModel({
      nickname: '小明',
      password: '123456',
      age: 18
    });
    user1.save();
  });
};

connect();
