const NeteaseCloudMusicApi = require('NeteaseCloudMusicApi');
const express = require('express');
const app = express();

// 修复song/url乱码：全局强制JSON响应头
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

// 挂载完整API
app.use(NeteaseCloudMusicApi);

// 根目录访问静态首页（后续放index.html音乐站）
app.use(express.static('./'));

module.exports = app;
