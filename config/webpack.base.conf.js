const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// utility
const resolve = (...args) => path.resolve(__dirname, '..', ...args);

// constant
const SRC_DIR = resolve('src');
const OUTPUT_DIR = resolve('dist');
const TEMPLATE_DIR = resolve('public');
const TEMPLATE_ENTRY_FILENAME = 'index.html';
const PUBLIC_PATH = '/';

const isDev = process.env.NODE_ENV !== 'production';

const baseWebpackConfig = {
  target: 'web',
  entry: {
    app: [resolve(SRC_DIR, 'index.js')],
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    modules: [SRC_DIR, resolve('node_modules')],
    alias: {
      '@/components': resolve(SRC_DIR, 'components'),
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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return (
                  path.relative(path.dirname(resourcePath), context) +
                  PUBLIC_PATH
                );
              },
              hmr: isDev,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(TEMPLATE_DIR, TEMPLATE_ENTRY_FILENAME),
      favicon: resolve(TEMPLATE_DIR, 'favicon.ico'),
      filename: TEMPLATE_ENTRY_FILENAME,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
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
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};

module.exports = baseWebpackConfig;
