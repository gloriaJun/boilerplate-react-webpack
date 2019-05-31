const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// utility
const resolve = (...args) => path.resolve(__dirname, '..', ...args);

// constant
const SRC_DIR = resolve('src');
const OUTPUT_DIR = resolve('dist');
const TEMPLATE_DIR = resolve('public');
const TEMPLATE_ENTRY_FILENAME = 'index.html';

const baseWebpackConfig = {
  target: 'web',
  entry: {
    app: [resolve(SRC_DIR, 'index.js')],
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
  },
  resolve: {
    modules: [SRC_DIR, resolve('node_modules')],
    alias: {
      '@components': resolve(SRC_DIR, 'components'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(TEMPLATE_DIR, TEMPLATE_ENTRY_FILENAME),
      favicon: resolve(TEMPLATE_DIR, 'favicon.ico'),
      filename: TEMPLATE_ENTRY_FILENAME,
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
