const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8888
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('common', resolve('src/common'))
  }
}
