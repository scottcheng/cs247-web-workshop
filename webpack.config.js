var webpack = require('webpack');
var path = require('path');
var nib = require('nib');

var paths = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: paths.src + '/scripts/main.js',
  output: {
    path: paths.dest,
    filename: 'main.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'url?limit=10000',
      }
    ],
  },

  stylus: {
    use: [nib()],
  },
};
