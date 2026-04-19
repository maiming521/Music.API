const api = require('NeteaseCloudMusicApi');

// Vercel Serverless 函数标准入口，不是express！！！
module.exports = async (req, res) => {
  // 强制JSON响应头，永久解决song/url浏览器二进制乱码
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 你之前调试确认过：官方唯一原生入口
    await api.serveNcmApi(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
