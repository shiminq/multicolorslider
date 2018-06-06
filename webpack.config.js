var webpack = require("webpack");
var path = require("path");

var SRC = path.resolve(__dirname, "src");
var TARGET = path.resolve(__dirname, "target");

var config = {
  entry: SRC + "/main.js",
  output: {
    path: TARGET,
    filename: "index.js",
    sourceMapFilename: "index.map"
  },
  devtool: '#source-map',
  devServer: {
    inline: true,
    port: 2222,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        include: SRC,
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-3']
        }
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }

};

module.exports = config;
