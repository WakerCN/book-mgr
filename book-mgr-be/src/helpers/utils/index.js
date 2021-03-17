/**
 * 根据时间戳获取年份
 *
 * @param {Number} timeStamp
 * @returns
 */
const getYearByTimeStamp = (timeStamp) => {
  return new Date(timeStamp).getFullYear();
};

/**
 * 根据时间戳获取月份
 *
 * @param {Number} timeStamp
 * @returns
 */
const getMonthByTimeStamp = (timeStamp) => {
  return new Date(timeStamp).getMonth();
};

/**
 *
 */
const getBody = (context) => {
  return context.request.body || {};
};

module.exports = {
  getYearByTimeStamp,
  getMonthByTimeStamp,
  getBody,
};
