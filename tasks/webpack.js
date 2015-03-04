var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	webpack = require('webpack'),
	notifier = require('node-notifier'),
	path = require('path');

var webpackConfig = {
	entry: ['./application/main.js'],
	output: {
		path: __dirname,
		pathinfo: true,
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
			{ test: /\.tpl$/, loader: require.resolve('./template-loader.js') }
		]
	}
};

var webpackCallback = function(err, stats) {
	if(err) {
		throw new plugins.util.PluginError('[webpack]', err);
	} else {
		if(stats.hasErrors() || stats.hasWarnings()) {
			try {
				var errors;

				if(stats.compilation.errors[0]) {
					errors = stats.compilation.errors[0];
				}

				if(stats.compilation.warnings[0]) {
					errors = stats.compilation.warnings[0];
				}

				var message = [
					errors.module.rawRequest,
					errors.error.toString()
				].join('\n');

				notifier.notify({
					title: 'Boiler error',
					message: message
				});
			} catch(err) {}
		}
		plugins.util.log('[webpack]', stats.toString({colors: true, chunks: false}));
	}
};

gulp.task('webpack', function() {
	webpackConfig.devtool = 'eval';
	webpackConfig.watch = true;

	webpack(webpackConfig, webpackCallback);
});

gulp.task('webpack-build', function() {
	webpackConfig.devtool = 'eval-source-map';
	
	webpack(webpackConfig, webpackCallback);
});
