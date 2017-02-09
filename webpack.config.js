'use strict';
//requiring in extracttext and html plugin for building out bundle
const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
//module build
module.exports = {
  //entry path and output path bundle.js is the standard
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  plugins: [
    //plugins referenced in the beggining of document both are constructors ExtractText
    //builds the bundle html plugin draws from index.html
    new ExtractText('bundle.js'),
    new HTMLPlugin({ template: `${__dirname}/app/index.html`}),
  ],
  module: {
    //module within module that sets rules(new to webpack 2.0)
    rules: [
      {
        //pathing for babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        //pathing for html-loader
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        //pathing for css loader ExtractText has to build beforehand to prevent website flashing early
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
