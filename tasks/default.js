var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function() {
	return runSequence(['libs', 'helpers', 'components', 'partials'], 'application', ['server', 'watch']);
});