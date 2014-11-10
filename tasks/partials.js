var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	glob = require('glob');

gulp.task('partials', function() {
	return gulp.src('', {read: false})
		.pipe(plugins.plumber(plugins.util.log))
		.pipe(plugins.tap(function(file) {
			var partials = ["var Ractive = require('ractive');\n"];

			glob.sync('./application/templates/**/*.tpl').forEach(function(file) {
				if(file.indexOf('/_') !== -1) {
					file = file.split('./application/')[1];
					partials.push("Ractive.partials['" + file + "'] = require('" + file + "');");
				}
			});

			file.contents = new Buffer(partials.join('\n'));
		}))
		.pipe(plugins.rename('partials.js'))
		.pipe(gulp.dest('temp'));
});