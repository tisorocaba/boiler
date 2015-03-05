var Marionette = require('marionette');

module.exports = Marionette.ItemView.extend({
	template: require('templates/error.tpl'),

	events: {
		'click .btn-fechar': 'destroy'
	}
});
