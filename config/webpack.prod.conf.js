const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.conf');

const isAnalyze = process.argv.includes('--analyze');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].chunk.js',
  },
  plugins: [...(isAnalyze ? [new BundleAnalyzerPlugin()] : [])],
});
