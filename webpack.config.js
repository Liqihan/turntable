var path = require('path');
var webpack = require('webpack');
let autoprefixer = require('autoprefixer')
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			include: path.resolve(__dirname, './src'),
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader!postcss-loader"
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass?sourceMap'
		}, {
			test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
			loader: "file"
		}, {
			test: /\.(png|jpg|gif|svg|json)$/,
			loader: 'file',
			query: {
				name: '[name].[ext]?[hash]'
			}
		}, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery!expose?$'
        }]
	},
    
	postcss: [autoprefixer({browsers: ['> 5%']})],
	vue: {
		loaders: {
			css: 'style!css!autoprefixer',
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	// plugins: [
	// 	new webpack.ProvidePlugin({
	// 		$: "jquery",
	// 		jQuery: "jquery",
	// 		"window.jQuery": "jquery"
	// 	}),
    //     new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')//这是第三方库打包生成的文件
	// ],
	devtool: false
}