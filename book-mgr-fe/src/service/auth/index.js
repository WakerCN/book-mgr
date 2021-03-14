import axios from 'axios';

export const register = (username, password) => {
  axios.post('http://localhost:3000/auth/register', {
    username,
    password,
  });
};

export const login = () => {};
