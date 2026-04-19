const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 强制JSON响应头，彻底解决浏览器二进制乱码
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 你包里唯一正确入口！刚才调试页面明确看到 serveNcmApi
    await api.serveNcmApi(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
