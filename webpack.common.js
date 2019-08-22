const path = require('path');
const lessToJs = require('less-vars-to-js');
const fs  = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const releaseDir = '/home/leizhang/dist';
const antdDefaultCssOverride = lessToJs(fs.readFileSync(path.join(__dirname,
  'src/styles/antd-default-override.less'), 'utf8'));

module.exports = {
  entry: {
    'app': './src/index.js',
    'css': './src/styles/style.css'
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
    path: path.resolve(__dirname, releaseDir),
    publicPath: '/'
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
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: antdDefaultCssOverride
            }
          }
        ]
      },
    ]
  }
};
