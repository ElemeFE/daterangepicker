const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const isWatch = process.env.NODE_ENV === 'watch';

module.exports = {
  entry: {
    daterangepicker: './src/DateRangePicker.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    library: 'DateRangePicker',
    libraryTarget: 'umd',
    filename: isProduction ? '[name].min.js' : '[name].js'
  },
  babel: {
    presets: ['es2015']
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: '/node_modules', loader: 'eslint'}
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, exclude: /node_modules/, loader: 'style!css!sass!'}
    ]
  }
};

if (isProduction) {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
} else {
  // 启动服务
  if(isWatch) require('./server');
}
