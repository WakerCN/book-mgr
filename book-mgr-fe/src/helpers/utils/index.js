import { message } from 'ant-design-vue';

/**
 * 响应结果统一处理
 *
 * @param {*} responese
 * @param {Boolean} showError
 */
// eslint-disable-next-line import/prefer-default-export
export const handleResult = (responese, showError = true) => {
  const { data } = responese;
  if (data.code === 0 && showError === true) {
    message.error(data.msg);
  }
  return {
    success(cb) {
      if (data.code === 1) {
        cb(data, responese);
      }
      return this;
    },
    fail(cb) {
      if (data.code === 0) {
        cb(data, responese);
      }
      return this;
    },
    finally(cb) {
      cb(data, responese);
      return this;
    },
  };
};
