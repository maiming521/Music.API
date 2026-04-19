const axios = require('axios');

module.exports = async (req, res) => {
  // 永久JSON响应头，再也不乱码
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 网易云官方正确接口路径！之前路径拼错了！
    const officialUrl = 'https://music.163.com/api/song/enhance/player/url' + req.url;
    
    const result = await axios({
      url: officialUrl,
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://music.163.com/',
        'Origin': 'https://music.163.com'
      }
    });
    res.status(200).json(result.data);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '接口请求异常',
      error: err.message
    });
  }
};
