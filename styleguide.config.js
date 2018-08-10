/* eslint-disable import/no-commonjs */

const path = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  webpackConfig,
  getComponentPathLine(componentPath) {
    return componentPath.replace('../', '');
  },
  pagePerSection: true,
  serverPort: 6061,
  showUsage: true,
  showCode: true,
  skipComponentsWithoutExample: true,
};
