var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function() {
	return runSequence(['helpers', 'components', 'partials'], 'webpack', ['server', 'watch']);
});