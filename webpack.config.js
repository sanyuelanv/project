var path = require('path');
var node_module_dir = path.resolve(__dirname, 'node_module');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: "babel-loader", //加载babel模块
            include: [
                path.resolve(__dirname, 'app'),
            ],
            exclude: [
                node_module_dir
            ],
            test: /\.jsx?$/,
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }
}
