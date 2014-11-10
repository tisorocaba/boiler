var Boiler = require('boiler');

module.exports = Boiler.Controller.extend({
	home: function(id, nome, params) {
		this.showView('#main', 'views/home');
	}
});