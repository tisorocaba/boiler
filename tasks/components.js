var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	glob = require('glob');

gulp.task('components', function() {
	return gulp.src('', {read: false})
		.pipe(plugins.plumber(plugins.util.log))
		.pipe(plugins.tap(function(file) {
			var components = ["var Ractive = require('ractive');\n"];

			glob.sync('./application/components/**/*.ract').forEach(function(file) {
				file = file.split('./application/')[1];
				var componentName = file.split('components/')[1].replace('.ract', '');
				componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
				components.push("Ractive.components." + componentName + " = Ractive.extend(require('" + file + "'));");
			});

			file.contents = new Buffer(components.join('\n'));
		}))
		.pipe(plugins.rename('components.js'))
		.pipe(gulp.dest('temp'));
});