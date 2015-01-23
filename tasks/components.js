var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs-extra');

gulp.task('components', function() {
	var components = ["var Ractive = require('ractive');\n"];

	glob.sync('./application/components/**/*.ract').forEach(function(file) {
		file = file.split('./application/')[1];
		var componentName = file.split('components/')[1].replace('.ract', '');
		components.push("Ractive.components['" + componentName + "'] = Ractive.extend(require('" + file + "'));");
	});

	fs.outputFileSync('temp/components.js', components.join('\n'));
});