const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  // 强制JSON响应头！彻底解决song/url浏览器二进制乱码问题
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  try {
    // 4.12.1正确调用方式！不再报default错误
    await api(req, res);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口异常',
      error: err.message
    });
  }
};
