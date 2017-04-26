var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, 'node_module')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'app/main.js'), ],
    common: ['react','react-dom',]
  },
  output: {
    path: path.resolve(__dirname, 'build/static/js'),
    chunkFilename: '[name].[chunkhash:5].js',
    // 读取chunk时候所用的，这个取决于服务器如果读取静态
    publicPath:'/static/js/',
    filename: 'app.[chunkhash:5].js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, 'app')],
        exclude: [node_module_dir],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader?minimize&modules&localIdentName=_[local]_[hash:base64:5]',
        }),
        include: [path.resolve(__dirname, 'app')],
        exclude: [node_module_dir],
      },

    ]
  },
  node: {Buffer: false},
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.LoaderOptionsPlugin({minimize: true}),
    new webpack.optimize.UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,

      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),
    /*
        这两个CommonsChunkPlugin是一个点睛之笔。copy自vue-cli
        首先CommonsChunkPlugin是官方规定集合多次调用模块的地方，但很多人会把它做成不经常变的库的打包集合。因此出现了一个矛盾：
        1. webpack打包的时候，会给common内部也打上一个MD5码，而且，每次更新用户还是需要重新下载一个common文件。（旧的common会因为md5不同而报错）
        2. 有些开发者希望这个common是更具内容变而已改变md5码的（就像webpack的 code spliting的文件一样）。而不是每次打包改变一次。
        事实上：webpack是会根据文件改动才改变md5码的，但是common为什么也会这样呢？原因在于再给它打包的时候，webpack会在common中写进一段runtime。这段代码就是改变md5的根源。
        因此这里有一个技巧：先使用CommonsChunkPlugin的minChunks（指定打包成common的文件中，最少有多少次调用才会打包进来。）。这样把我们的库文件打包出来之后，再把那段没有调用过的runtime打包出来。
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      filename:'common.[chunkhash:5].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['common'],
      filename:'manifest.[chunkhash:5].js'
    }),
    new ExtractTextPlugin({
      filename:(getPath) => {
        return getPath('../css/[name].css').replace('css/js', 'css');
      },
      allChunks:true
    }),
  ],
}
