/*jshint esversion: 8*/
const path = require('path');
module.exports = {
  // entry point
  entry: './src/controller/index.js',

  // output point
  output: {
    path: path.resolve('./dist'),
    filename:'bundle.js'
  },
  watch: true,
  module: {
    rules:[
      {test:/\.js$/, exclude: /(node_modules)/, loader:'babel-loader', query:{presets: ['@babel/preset-env']}},
      {test:/\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};
