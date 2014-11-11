var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

gulp.task('jshint', function() {
	return gulp.src(['application/**/*.js', 'libs/boiler.js'])
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(plugins.jshint.reporter('fail'));
});