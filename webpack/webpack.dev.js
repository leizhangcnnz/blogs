const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('../webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    contentBase: '../dist', 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});