const webpack = require('webpack')
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: "docs",
	productionSourceMap: false,
	pages: {
		login: {
			entry: "src/login/main.js"
		},
		index: {
			entry: "src/index/main.js"
		},
		teamgoal: {
			entry: "src/works/teamgoal/main.js"
		},
		juiker: {
			entry: "src/works/juiker/main.js"
		}
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				'window.jQuery': 'jquery',
				jQuery: 'jquery'
			})
		],
		module: {
			rules: [{
				test: /\.(mov|mp4)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'movie/[name].[ext]'
					}
				}]
			}]
		}
	}
}