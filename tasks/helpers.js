var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs-extra');

gulp.task('helpers', function() {
	var helpers = glob.sync('./application/helpers/**/*.js').map(function(file) {
		return "require('" + file.split('./application/')[1].replace('.js', '') + "');";
	});

	fs.outputFileSync('temp/helpers.js', helpers.join('\n'));
});