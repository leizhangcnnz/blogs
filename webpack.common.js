const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const releaseDir = '/home/leizhang/dist'

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, releaseDir + '/index.html'),
      favicon: './favicon.ico'
    })
  ],
  output: {
    filename: '[name].bundle_[hash].js',
    path: path.resolve(__dirname, releaseDir)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
