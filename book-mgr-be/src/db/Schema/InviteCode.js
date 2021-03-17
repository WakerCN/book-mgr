const mongoose = require('mongoose');
const { getMeta } = require('../helpers');

// 1. 定义Schema
const InviteCodeSchema = new mongoose.Schema({
  code: String,
  userID: String,
  meta: getMeta(),
});

// 2. 注册schema成model
module.exports = mongoose.model('InviteCode', InviteCodeSchema);
