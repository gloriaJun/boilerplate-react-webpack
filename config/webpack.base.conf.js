'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// utility
const resolve = (...args) => path.resolve(__dirname, ...args);

// constant
const SRC_DIRNAME = 'src';
const OUTPUT_DIR = resolve('..', 'dist');
const PUBLIC_PATH = '';
const TEMPLATE_DIRNAME = 'public';
const TEMPLATE_ENTRY_FILENAME = 'index.html';

const isDev = process.env.NODE_ENV !== 'production';
const config = require('dotenv').config(resolve('..', '.env'));

const baseWebpackConfig = {
  target: 'web',
  context: resolve('..'),
  entry: {
    app: [`./${SRC_DIRNAME}/index.js`],
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    modules: ['node_modules', SRC_DIRNAME, 'test'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
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
      template: `${TEMPLATE_DIRNAME}/${TEMPLATE_ENTRY_FILENAME}`,
      favicon: `${TEMPLATE_DIRNAME}/favicon.ico`,
      filename: TEMPLATE_ENTRY_FILENAME,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      ...config.parsed,
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
