const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

const baseWebpackConfig = {
  output: {
    path: config.outputPath,
    publicPath: '/',
  },
  resolve: {
    modules: [
      config.appEntry,
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: config.appEntry,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      filename: './index.html',
    }),
  ],
  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

module.exports = baseWebpackConfig;