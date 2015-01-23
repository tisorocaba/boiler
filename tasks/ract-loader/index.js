/**
* webpack Ractive components loader
* inspired by https://github.com/marcello3d/node-ractify
**/

var Ractive = require('ractive'),
	RCU = require("./rcu.node.js");

module.exports = function(source) {
	this.cacheable && this.cacheable();

	try {
		RCU.init(Ractive);

		var component = RCU.parse(source),
			script = [];

		if (component.script) {
			script.push('var component = module;');
			script.push(component.script);

			if (component.template) {
				script.push('component.exports.template = ' + JSON.stringify(component.template));
			}

			if (component.css) {
				script.push('component.exports.css = ' + JSON.stringify(component.css));
			}
		} else {
			script.push('exports.template = ' + JSON.stringify(component.template));

			if (component.css) {
				script.push('exports.css = ' + JSON.stringify(component.css));
			}
		}

		return script.join('\n\n');
	} catch(err) {
		console.log(err);
	}
}