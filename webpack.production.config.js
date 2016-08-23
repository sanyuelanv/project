var path = require('path');
var webpack = require('webpack');
var node_module_dir = path.resolve(__dirname,'node_module');

module.exports = {
	entry:{
		app:[path.resolve(__dirname,'app/main.js'),],
		react: ['react','react-dom','babel-polyfill']
	},
	output:{
		path:path.resolve(__dirname,'build/static/js'),
		filename:'app.js'
	},
	module:{
		loaders:[
			{
				loader:"babel-loader",   //加载babel模块
				include:[
					path.resolve(__dirname,'app'),
				],
				exclude:[
					node_module_dir
				],
				test:/\.jsx?$/,
				query:{
					plugins:['transform-runtime'],
					presets:['es2015','stage-0','react']
				}
			},
		]
	},
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    	new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
  	]
}

/*
	new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
	由于官方的React是已经合并过的了，所以Webpack是不提倡这样去合并React因此需要这一句去设置环境变量去再定制
*/
