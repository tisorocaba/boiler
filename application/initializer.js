// Código a ser executado antes da inicialização da aplicação.
var Boiler = require('boiler'),
	Ractive = require('ractive');

require('backbone.queryparams');
require('ractive-adaptors-backbone');

Ractive.defaults.adapt.push('Backbone');

Boiler.showView('#menu', 'views/menu');