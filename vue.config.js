module.exports = {
  // presets: [
  //   '@vue/app'
  // ],
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        changeOrigin: true,
        pathRewrite:{
          '^/api': '/static/mock'
        }
      }
    }
  }
}
