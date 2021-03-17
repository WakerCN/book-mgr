import axios from 'axios';

/**
 * 注册请求
 *
 * @param {String} username 用户名
 * @param {String} password 密码
 * @param {String} inviteCode 邀请码
 */
export const register = (username, password, inviteCode) => axios.post('http://localhost:3000/auth/register', {
  username,
  password,
  inviteCode,
});

/**
 * 登录请求
 *
 * @param {String} username 用户名
 * @param {String} password 密码
 */
export const login = (username, password) => axios.post('http://localhost:3000/auth/login', {
  username,
  password,
});
