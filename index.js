const express = require('express');
const app = express();

// 加载官方原版网易云API，和你之前调试包里结构100%匹配
const api = require('NeteaseCloudMusicApi');
api.serveNcmApi(app);

// 全局强制JSON响应头！永久解决song/url浏览器二进制乱码问题
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});

module.exports = app;
