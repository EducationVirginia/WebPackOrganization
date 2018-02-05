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
				test: /(\.css|\.scss)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	fallback: "style-loader",
		        	use: [
			        	{
			        		loader: "css-loader",
			        		options: { 
			        			minimize: true,
                                sourceMap: true
			        		}
			        	},
						{
						  loader: 'postcss-loader', // Run post css actions
						  options: {
						    plugins: function () { // post css plugins, can be exported to postcss.config.js
						      return [
						        require('precss'),
						        require('autoprefixer')
						      ];
						    }
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
				'./**/*.html',
				'../**/*.js',
				'../**/*.scss',
				'./**/*.css'			
			],
			port: 9000,
			server: { baseDir: ['dist'] }
	    })
	]
};