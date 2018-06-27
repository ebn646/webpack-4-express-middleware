const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'public'),
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'public/',
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.pug$/,
        use:['pug-loader']
      }
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname, '/public'),
    proxy: {
      '/': 'http://localhost:3000'
    },
    port: 8080
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
