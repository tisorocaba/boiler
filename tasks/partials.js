var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs-extra');

gulp.task('partials', function() {
	var partials = ["var Ractive = require('ractive');\n"];

	glob.sync('./application/templates/**/*.tpl').forEach(function(file) {
		if(file.indexOf('/_') !== -1) {
			file = file.split('./application/')[1];
			partials.push("Ractive.partials['" + file + "'] = require('" + file + "');");
		}
	});

	fs.outputFileSync('temp/partials.js', partials.join('\n'));
});