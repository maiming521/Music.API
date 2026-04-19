const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    let id = req.query.id;
    if (!id) {
      return res.send({ code: 400, data: "请输入id" });
    }

    let { data } = await axios.get("http://music.163.com/api/song/url", {
      params: { id: id },
      headers: {
        "User-Agent": "Mozilla/5.0",
        Referer: "https://music.163.com/",
      },
    });

    res.send(data);
  } catch (e) {
    res.send({ code: -1, msg: "error" });
  }
};
