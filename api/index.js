const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    const url = 'https://music.163.com/api' + req.url;
    const result = await axios({
      url,
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://music.163.com'
      }
    });
    res.status(200).json(result.data);
  } catch (err) {
    res.status(200).json({
      code: -1,
      msg: '请求失败',
      error: err.message
    });
  }
};
