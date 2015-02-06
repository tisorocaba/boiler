var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence');

gulp.task('build', function() {
	return runSequence('jshint', 'clean', ['helpers', 'webpack-build'], ['minify-css', 'minify-js', 'copy', 'html-replace'], function(err) {
		if(err) {
			plugins.util.log(plugins.util.colors.red('########################################################################################'));
			plugins.util.log(plugins.util.colors.red('#                                    FALHA NO BUILD :(                                 #'));
			plugins.util.log(plugins.util.colors.red('########################################################################################'));
		} else {
			plugins.util.log(plugins.util.colors.green('########################################################################################'));
			plugins.util.log(plugins.util.colors.green('#                            BUILD REALIZADO COM SUCESSO :)                            #'));
			plugins.util.log(plugins.util.colors.green('########################################################################################'));
		}
	});
});