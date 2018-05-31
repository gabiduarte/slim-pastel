const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const cssPlugin = new ExtractTextPlugin('main.css');

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	
	plugins: [htmlPlugin, cssPlugin]
};