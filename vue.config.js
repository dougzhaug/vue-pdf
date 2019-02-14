module.exports = {
  // presets: [
  //   '@vue/app'
  // ],
  baseUrl:process.env.NODE_ENV === 'production' ? './' : '/',
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
