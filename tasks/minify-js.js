var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	pkg = require('../package.json');

gulp.task('minify-js', function() {
	return gulp.src(['temp/application.js'])
		.pipe(plugins.uglify())
		.pipe(plugins.rename('application.min.js'))
		.pipe(gulp.dest('dist/' + pkg.version + '/js'));
});