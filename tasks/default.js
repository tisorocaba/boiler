var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function() {
	return runSequence(['helpers', 'partials', 'webpack'], ['server', 'watch']);
});