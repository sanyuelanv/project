var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, 'node_module')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    react: ['react', 'react-dom', 'babel-polyfill', 'whatwg-fetch']
  },
  output: {
    path: path.resolve(__dirname, 'build/static/js'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    }),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: Infinity,
      filename: 'react.js'
    }),
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, 'app')],
        exclude: [node_module_dir],
      },
      {
        test: /\.css$/,
        use: ["style-loader", 'css-loader?modules&localIdentName=_[local]_[hash:base64:5]'],
        include: [path.resolve(__dirname, 'app')],
        exclude: [node_module_dir],
      },

    ]
  },
}
