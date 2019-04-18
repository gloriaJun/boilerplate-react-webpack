const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./config');

const port = process.env.PORT || 3000;

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    app: `${config.appEntry}/index.js`,
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      // analyzerMode: "static",               // 분석결과를 파일로 저장
      // reportFilename: "docs/size_dev.html", // 분설결과 파일을 저장할 경로와 파일명 지정
      // defaultSizes: "parsed",
      // openAnalyzer: true,                   // 웹팩 빌드 후 보고서파일을 자동으로 열지 여부
      // generateStatsFile: true,              // 웹팩 stats.json 파일 자동생성
      // statsFilename: "docs/stats_dev.json", // stats.json 파일명 rename
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port, // default port is 3000
    historyApiFallback: true,
    open: true,
    hot: true,
  },
});

module.exports = devWebpackConfig;
