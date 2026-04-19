const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 核心修复：强制JSON响应头！彻底解决浏览器打开二进制乱码问题
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  try {
    // 官方原版完整路由，全部接口可用，不会500崩溃
    await api.default(req, res);
  } catch (err) {
    // 错误捕获，不会直接崩函数500
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
