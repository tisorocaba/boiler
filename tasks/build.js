var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence');

gulp.task('build', function() {
	return runSequence('clean', ['libs', 'helpers', 'components', 'partials', 'application'], ['minify-css', 'minify-js', 'copy', 'html-replace'], function() {
		plugins.util.log(plugins.util.colors.green('########################################################################################'));
		plugins.util.log(plugins.util.colors.green('#                            BUILD REALIZADO COM SUCESSO :)                            #'));
		plugins.util.log(plugins.util.colors.green('########################################################################################'));
	});
});