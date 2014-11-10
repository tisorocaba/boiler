var gulp = require('gulp'),
	pkg = require('../package.json');

gulp.task('copy', function() {
	gulp.src(['assets/**', '!assets/css/**']).pipe(gulp.dest('dist/' + pkg.version + '/assets'));
	gulp.src(['config.json']).pipe(gulp.dest('dist/' + pkg.version));
});