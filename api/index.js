const axios = require('axios');

module.exports = async (req, res) => {
  // 永久标准JSON响应头，彻底解决最开始二进制乱码问题
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // 兼容 /song/url?id=xxx 你原来的官方地址！！！
    const { id } = req.query;
    if (!id) {
      return res.json({ code: 400, msg: '参数错误，请传入歌曲id' });
    }

    // 网易云官方新版正确接口格式
    const result = await axios.get(
      `https://music.163.com/api/song/enhance/player/url/v1?ids=[${id}]&level=standard`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Referer: 'https://music.163.com/',
          Origin: 'https://music.163.com'
        }
      }
    );

    res.json(result.data);
  } catch (err) {
    res.json({ code: -1, msg: '接口请求失败', error: err.message });
  }
};
