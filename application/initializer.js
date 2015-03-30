// Código a ser executado antes da inicialização da aplicação.
var Boiler = require('boiler'),
	Marionette = require('marionette');

require('backbone.queryparams');

Boiler.showView('#header', require('views/menu'));

// item ativo do menu
Marionette.View.prototype.on('render', function() {
	$('.header .nav.navbar-nav > li').removeClass('active');
	$('.header .nav.navbar-nav > li > a').filter('[href|="' + location.hash + '"]').parent().addClass('active');
});
