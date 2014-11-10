var Ractive = require('ractive'),
	Config = require('config');

Ractive.defaults.data.config = function(value) {
	if(value === 'ENV') {
		return '<span style="color:tomato;">' + Config[value] + '</span>';
	} else {
		return Config[value];
	}
};