'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bundle.css'),
    new HTMLPlugin({ template: `${__dirname}/app/views/index.html` }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
