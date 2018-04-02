const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const pathsToClean = ['dist'];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // __dirname is global node convenience variable which returns the current path
    // path.resolve takes first arg and concats it to second arg to make a full
    // pathname: "currentDir/dist"
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(pathsToClean),
  ],
  module: {
    rules: [
      {
        // which fileType to use the loader
        test: /\.css$/,
        // recommended by webpack to use style-loader (add css to dom) and css-loader
        // (interprets @import and url()) together
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
};
