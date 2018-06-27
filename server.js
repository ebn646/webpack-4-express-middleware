const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const compiler = webpack(webpackConfig);

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(webpackDevMiddleware(compiler, {
  mode: 'development',
  filename: 'bundle.js',
  publicPath: '/public',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/', function (req, res) {
  res.render('index');
});

const server = app.listen(3000, function () {
const host = server.address().address;
const port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});
