var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	glob = require('glob'),
	ractivate = require('ractivate'),
	ractify = require('ractify'),
	browserify = require('browserify');

gulp.task('application', function() {
	return gulp.src('', {read: false})
		.pipe(plugins.plumber(plugins.util.log))
		.pipe(plugins.tap(function(file) {
			var bundler = browserify({
				entries: './application/main.js',
				fast: true,
				debug: true
			});

			glob.sync('./application/**/*.js').forEach(function(file) {
				if(file !== './application/main.js') {
					bundler.require(file, {expose: file.split('./application/')[1].replace('.js', '')});
				}
			});

			glob.sync('./application/components/**/*.ract').forEach(function(file) {
				bundler.require(file, {expose: file.split('./application/')[1]});
			});

			glob.sync('./application/templates/**/*.tpl').forEach(function(file) {
				bundler.require(file, {expose: file.split('./application/')[1]});
			});

			glob.sync('./libs/*.js').forEach(function(file) {
				if(file !== './libs/boiler.js') {
					bundler.external(file.split('./libs/')[1].replace('.js', ''));
				} else {
					bundler.require(file, {expose: file.split('./libs/')[1].replace('.js', '')});
				}
			});

			bundler.require('./temp/helpers.js', {expose: 'helpers'});
			bundler.require('./temp/components.js', {expose: 'components'});
			bundler.require('./temp/partials.js', {expose: 'partials'});
			bundler.require('./config.js', {expose: 'config'});

			bundler.external('ractive');

			bundler.transform({extensions: ['.tpl']}, ractivate);
			bundler.transform(ractify);

			file.contents = bundler.bundle();
		}))
		.pipe(plugins.rename('application.js'))
		.pipe(plugins.wait(500))
		.pipe(gulp.dest('temp'));
});