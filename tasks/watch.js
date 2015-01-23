var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch(['application/templates/**/_*'], ['partials']);
	gulp.watch(['application/helpers/**/*'], ['helpers']);
	gulp.watch(['application/components/**/*'], ['components']);
});