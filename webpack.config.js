var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: "./app/bootstrap",
  output: {
    path: __dirname + "/lib",
    publicPath: 'lib/',
    filename: "bundle.js",
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};
