const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const PORT = process.env.PORT || 8080;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].chunk.js',
  },
  devtool: 'inline-source-map',
  plugins: [],
  devServer: {
    host: 'localhost',
    port: PORT, // default port is 3000
    historyApiFallback: true,
    open: false,
    hot: true,
  },
});
