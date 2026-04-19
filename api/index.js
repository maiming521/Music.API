const axios = require('axios');
 module.exports = async (req, res) => {
   // 永久JSON响应头，彻底解决最开始二进制乱码
   res.setHeader('Content-Type', 'application/json; charset=utf-8');
   // 👇 关键：判断访问路径是不是 /song/url！！！之前完全没加！！！
   if (req.url.startsWith('/song/url')) {
     const { id } = req.query;
     if (!id) {
       return res.json({ code: 400, msg: '参数错误，请传入歌曲id' });
     }
     try {
       const result = await axios.get(
         `https://music.163.com/api/song/url?id=${id}`,
         {
           headers: {
             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
             Referer: 'https://music.163.com/',
             Origin: 'https://music.163.com'
           }
         }
       );
       return res.json(result.data);
     } catch (err) {
       return res.json({ code: -1, msg: '接口请求失败', error: err.message });
     }
   }
   // 其他路径返回404
   res.json({ code: 404, message: '接口未找到！' });
 };
