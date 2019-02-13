module.exports = {
  // presets: [
  //   '@vue/app'
  // ],
  devServer:{
    proxy:{
      '/api':{
        target:'http://api.loveliyuan.com',
        changeOrigin: true,
        pathRewrite:{
          '^/api': '/static/mock'
        }
      }
    }
  }
}
