var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	glob = require('glob'),
	browserify = require('browserify');

gulp.task('libs', function() {
	return gulp.src('', {read: false})
		.pipe(plugins.plumber(plugins.util.log))
		.pipe(plugins.tap(function(file) {
			var bundler = browserify({
				fast: true,
				noparse: glob.sync('./libs/*.js')
			});

			glob.sync('./libs/*.js').forEach(function(file) {
				if(file !== './libs/boiler.js') {
					bundler.require(file, {expose: file.split('./libs/')[1].replace('.js', '')});
				}
			});

			bundler.require('./node_modules/ractive/ractive-legacy.js', {expose: 'ractive'});

			file.contents = bundler.bundle();
		}))
		.pipe(plugins.rename('libs.js'))
		.pipe(gulp.dest('temp'));
});