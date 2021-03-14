const mongoose = require('mongoose');
const { getMeta } = require('../helpers');

// 1. 定义Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  meta: getMeta(),
});

// 2. 注册schema成model
module.exports = mongoose.model('User', UserSchema);
