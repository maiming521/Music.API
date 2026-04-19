const axios = require('axios');
 module.exports = async (req, res) => {
   res.setHeader('Content-Type', 'application/json; charset=utf-8');
   try {
     const id = req.query.id;
     if(!id) return res.json({code:400,msg:"缺少id"});
     const ret = await axios.get("https://music.163.com/api/song/url",{
       params:{id},
       headers:{
         "User-Agent":"Mozilla/5.0",
         "Referer":"https://music.163.com"
       }
     })
     res.json(ret.data);
   }catch(e){
     res.json({code:-1,msg:"失败"})
   }
 }
