const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 强制JSON响应头！永久解决song/url浏览器二进制乱码问题
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 官方原生正确调用方式！和你包里导出结构完全匹配
    await api.serveNcmApi(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
