var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, 'node_module')

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
