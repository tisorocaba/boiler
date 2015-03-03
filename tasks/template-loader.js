var Handlebars = require('handlebars'),
	runtime = require('handlebars/runtime')['default'];
	path = require('path');

module.exports = function(source) {
	this.cacheable && this.cacheable();

	var callback = this.async();

	callback(null, [
		'var Handlebars = require("handlebars/runtime")["default"];',
		'module.exports = Handlebars.template(' + Handlebars.precompile(source) + ');'
	].join('\n'));
}