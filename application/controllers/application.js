var Boiler = require('boiler');

module.exports = Boiler.Controller.extend({
	home: function() {
		this.showView('#main', 'views/home');
	}
});