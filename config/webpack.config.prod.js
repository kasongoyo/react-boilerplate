// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StatsPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const URL = 'http://127.0.0.1:3000/';

const clientConfig = {
	devtool: 'source-map',
	entry: path.resolve(__dirname, '..', 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, '..', 'public/dist'),
		filename: 'bundle.js',
		publicPath: URL,
		pathinfo: true
	},

	resolve: {
		extensions: ['.css', '.js', '.jsx'],
		modules: [
			__dirname,
			path.resolve(__dirname, '..', 'src', 'components'),
			'node_modules',
			'bower_components'
		],
		alias: {
		}
	},
	/* eslint indent:1 */
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader!eslint-loader'
		},
		{
			test: /\.scss$/,
			exclude: /(node_modules|bower_components)/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]', {
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => [require('autoprefixer'), require('css-mqpacker'), require('cssnano')]
						}
					}, 'sass-loader'
				]
			})
		},
		{
			test: /\.(png|jpg)$/,
			loader: 'url-loader?name=[hash]-[name].[ext]&limit=1024'
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader',
			query: {
				name: 'fonts/[name].[ext]',
				publicPath: `${URL}dist/`,
			}
		}
		]
	},
	/*eslint indent:0 */
	plugins: [
		new webpack.DefinePlugin({ // <-- key to reducing React's size
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		}),
		new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false,
			minimize: false
		}), //minify everything
	]
};


module.exports = clientConfig;
