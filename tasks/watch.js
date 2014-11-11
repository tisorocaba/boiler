var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch(['libs/*.js', '!libs/boiler.js'], ['libs']);
	gulp.watch(['application/**/*.*', 'libs/boiler.js'], function() {
		return runSequence(['helpers', 'components', 'partials'], 'application');
	});
});