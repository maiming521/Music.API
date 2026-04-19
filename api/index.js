const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 强制JSON响应头，永久解决song/url二进制乱码
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 你之前调试确认的官方唯一正确入口
    await api.serveNcmApi(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
