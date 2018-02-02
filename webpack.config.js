const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ASSET_PATH
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['env']
					}
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						outputPath: 'images/',
                        name: '[name].[ext]?[hash]',
					}
				} 			
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
		        	fallback: "style-loader",
		        	use: "css-loader"
		        })
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	use: [
		        	{
		        		loader: "css-loader",
		        		options: { 
		        			import: false,
		        			minimize: true
		        		}
		        	},
		        	{
		        		loader: "sass-loader"
		        	}
		        	]

		        })
			}
		]
	},
	plugins: [ 
	    new ExtractTextPlugin("./css/[name].css"),
	    new BrowserSyncPlugin({
	      host: 'localhost',
	     files: [
	        './src/style/*.css',
	        './src/style/*.scss',
	        './src/scripts/*.js',
	        './dist/*.html',
	        './dist/css/*.css'
	      ],
	      port: 9000,
	      server: { baseDir: ['dist'] }
	    })
	]
};