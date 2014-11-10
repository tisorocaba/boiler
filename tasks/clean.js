var gulp = require('gulp'),
	pkg = require('../package.json'),
	del = require('del');

gulp.task('clean', function() {
	return del(['dist/' + pkg.version]);
});