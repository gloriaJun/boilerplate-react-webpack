const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isAnalyze = process.argv.includes('--analyze');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].chunk.js',
  },
  plugins: [
    ...(isAnalyze ? new BundleAnalyzerPlugin() : []),
  ],
});
