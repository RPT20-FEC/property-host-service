var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});