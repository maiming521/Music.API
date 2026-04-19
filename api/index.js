const { handler } = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 强制JSON响应头！永久解决song/url浏览器二进制乱码
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  try {
    // 官方原生正确调用方式，再也不会报api/is not a function
    await handler(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
