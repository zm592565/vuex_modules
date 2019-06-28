const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'?'/':'./',
	outputDir: 'dist',
	productionSourceMap: false,
	assetsDir: 'static',
	lintOnSave: false, 
	filenameHashing: true,
    configureWebpack: {
        plugins : [],
        externals:{
            'vue': "Vue",
            'vuex':'Vuex',
			"vue-router": "VueRouter",
			"iview": "iview",
            "axios":'axios'
		},
		/* 代码压缩 */
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
				exclude: /\.min\.js$/,
				cache:true,
				extractComments: false,
				uglifyOptions: {
				  compress: {
					drop_console:true,
					pure_funcs:['console.log','console.info','console.error']
				  }
				},
				sourceMap: false,
				parallel: true
			  })
			]
		}
	},
	chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('$', resolve('public'))
            .set('assets',resolve('src/assets'))
    },
	pages: {
		index: {
			entry: 'src/pages/index/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'index',
		},
		basicInfo: {
			entry: 'src/pages/basicInfo/main.js',
			template: 'public/basicInfo.html',
			filename: 'basicInfo.html',
			title: 'basicInfo'
		},
	},
	devServer: {
		// open: true, 
    	// host: '127.0.0.1',
		// port: 9099,
		https: false,
		disableHostCheck: true,
		proxy: null
	},
	css: {
		extract: true,
		sourceMap: false,
		loaderOptions: {
			less: {
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			}
		},
		modules: false
	}
	
}
