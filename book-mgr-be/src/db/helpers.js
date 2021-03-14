/**
 * 获取问用户meta信息
 */
const getMeta = () => {
  return {
    createdAt: {
      type: Number,
      default: new Date().getTime(),
    },
    updatedAt: {
      type: Number,
      default: new Date().getTime(),
    },
  };
};

module.exports = {
  getMeta,
};
