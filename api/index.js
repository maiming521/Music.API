const api = require('NeteaseCloudMusicApi');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // 调试：打印包里所有导出内容，看看到底是什么结构
  res.status(200).json({
    packageExportKeys: Object.keys(api),
    apiIsFunction: typeof api === 'function',
    handlerIsExist: !!api.handler,
    defaultIsExist: !!api.default
  });
};
