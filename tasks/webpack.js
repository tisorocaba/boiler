var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	webpack = require('webpack'),
	notifier = require('node-notifier'),
	path = require('path');

var webpackConfig = {
	entry: ['./application/main.js'],
	output: {
		path: __dirname,
		filename: '../temp/application.js'
	},
	resolve: {
		modulesDirectories: [
			'libs',
			'application',
			'node_modules',
			'temp'
		],
		alias: {
			config: path.resolve('./config.js')
		}
	},
	module: {
		loaders: [
			{ test: /\.tpl$/, loader: 'handlebars-loader?rootRelative=' + path.resolve('application') + '/' }
		]
	}
};

var webpackCallback = function(err, stats) {
	if(err) {
		throw new plugins.util.PluginError('[webpack]', err);
	} else {
		if(stats.hasErrors() || stats.hasWarnings()) {
			var message = [
				stats.compilation.errors[0].module.rawRequest,
				stats.compilation.errors[0].error.toString()
			].join('\n');

			notifier.notify({
				title: 'Boiler error',
				message: message
			});
		}
		plugins.util.log('[webpack]', stats.toString({colors: true, chunks: false}));
	}
};

gulp.task('webpack', function() {
	webpackConfig.devtool = '#eval-source-map';
	webpackConfig.watch = true;

	webpack(webpackConfig, webpackCallback);
});

gulp.task('webpack-build', function() {
	webpack(webpackConfig, webpackCallback);
});
