var Boiler = require('boiler');

module.exports = Boiler.Controller.extend({
	home: function() {
		this.showView('#main', 'views/home');
	},

	page404: function() {
		this.showView('#main', 'views/404');
	}
});