var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs');

gulp.task('helpers', function() {
	var helpers = glob.sync('./application/helpers/**/*.js').map(function(file) {
		return "require('" + file.split('./application/')[1].replace('.js', '') + "');";
	});

	fs.writeFileSync('temp/helpers.js', helpers.join('\n'), 'utf8');
});