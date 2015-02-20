var Marionette = require('marionette');

require('bootstrap');

module.exports = Marionette.ItemView.extend({
	template: require('templates/loading.tpl'),

	onShow: function() {
		this.$('.modal').modal({backdrop: 'static'});
	}
});