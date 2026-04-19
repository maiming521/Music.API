const express = require('express');
const app = express();

// 加载网易云API
require('@binaryify/netease-cloud-music-api')(app);

// 全局修复 JSON 响应头，解决 song/url 乱码问题
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});

module.exports = app;
