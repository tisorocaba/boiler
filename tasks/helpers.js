var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	glob = require('glob');

gulp.task('helpers', function() {
	return gulp.src('', {read: false})
		.pipe(plugins.plumber(plugins.util.log))
		.pipe(plugins.tap(function(file) {
			var helpers = [];

			glob.sync('./application/helpers/**/*.js').forEach(function(file) {
				file = file.split('./application/')[1].replace('.js', '');
				helpers.push("require('" + file + "');");
			});

			file.contents = new Buffer(helpers.join('\n'));
		}))
		.pipe(plugins.rename('helpers.js'))
		.pipe(gulp.dest('temp'));
});