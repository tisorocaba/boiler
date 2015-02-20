var Marionette = require('marionette');

require('bootstrap');

module.exports = Marionette.ItemView.extend({
	template: require('templates/error.tpl'),

	onShow: function() {
		this.$('.modal').modal({backdrop: 'static'});
	}
});