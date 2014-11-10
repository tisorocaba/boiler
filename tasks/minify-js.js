var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	pkg = require('../package.json');

gulp.task('minify-js', function() {
	return gulp.src(['temp/libs.js', 'temp/application.js'])
		.pipe(plugins.concat('application.min.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist/' + pkg.version + '/js'));
});