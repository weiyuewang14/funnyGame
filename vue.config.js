const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: './',//修改目录
  outputDir: 'dist', // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  assetsDir: 'assets', // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
})
