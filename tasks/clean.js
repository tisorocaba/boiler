var gulp = require('gulp'),
	pkg = require('../package.json'),
	del = require('del');

gulp.task('clean', function(cb) {
	return del(['dist/' + pkg.version], cb);
});