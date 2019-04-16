var entryFolder = './src';
var path = require('path');
var fs = require('fs');
var entryPoints = fs.readdirSync(entryFolder).map(file => path.join(__dirname, '/src/', file));

module.exports = {
  mode: "development",
  entry: entryPoints,
  module: {
    rules: [{
      test: /\.(js)$/,
      use:[
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].json',
            outputPath: '/'
          }
        }, {
          loader: './index.js'
        }
      ]
    }, {
      test: /\.(ts)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].json',
            outputPath: '/'
          }
        }, {
          loader: 'jasonette-types-webpack-loader'
        }, {
          loader: 'ts-loader'
        }
      ]
    }]
  }
};
