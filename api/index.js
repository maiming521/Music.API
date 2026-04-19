const axios = require('axios');
 module.exports = async (req, res) => {
   res.setHeader('Content-Type', 'application/json; charset=utf-8');
   // 强制全部转发，不做任何路由拦截
   try {
     const target = "https://music.163.com" + req.url;
     const r = await axios.get(target, {
       headers: {
         "User-Agent": "Mozilla/5.0",
         "Referer": "https://music.163.com"
       }
     })
     res.json(r.data)
   } catch (e) {
     res.json({code:-1,msg:"error"})
   }
 }
