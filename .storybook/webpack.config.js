const webpack = require('webpack');
const getConfig = require('../webpack.config');
const config = getConfig();
module.exports = {
  module: {
    rules: config.module.rules
  }
}