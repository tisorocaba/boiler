var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch(['application/helpers/**/*'], ['helpers']);
});