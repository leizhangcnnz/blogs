const merge = require('webpack-merge');
const common = require('../webpack.common.js');

const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          chunks: 'initial',
        },
        'antd': {
          test: /antd/,
          chunks: 'initial',
          priority: 2
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable',
      generateStatsFile: true,
      analyzerPort: 3123,
      statsOptions: { source: false },
    }),
  ]
});