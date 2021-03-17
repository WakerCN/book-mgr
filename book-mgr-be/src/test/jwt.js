var jwt = require('jsonwebtoken');
var token = jwt.sign(
  {
    username: 'waker',
    password: 123456,
  },
  'aaa'
);

console.log(token);

jwt.verify(token, 'aaa', (err, payload) => {
  console.log(err, payload);
});
