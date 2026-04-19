const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 真正可用的网易云公开接口
    const { id } = req.query;
    if (!id) {
      return res.json({ code: 400, msg: '缺少 id 参数' });
    }

    const result = await axios.get(`https://music.163.com/api/song/enhance/player/url/v1?ids=[${id}]&level=standard`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Referer: 'https://music.163.com',
      },
    });

    res.json(result.data);
  } catch (err) {
    res.json({ code: -1, msg: '请求失败', error: err.message });
  }
};
