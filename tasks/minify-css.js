var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	pkg = require('../package.json');

gulp.task('minify-css', function() {
	return gulp.src('assets/css/main.css')
		.pipe(plugins.minifyCss({keepSpecialComments:0}))
		.pipe(plugins.rename('application.min.css'))
		.pipe(gulp.dest('dist/' + pkg.version + '/assets/css'));
});