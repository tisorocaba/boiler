// Código a ser executado antes da inicialização da aplicação.
var Boiler = require('boiler');

require('backbone.queryparams');

Boiler.showView('#header', require('views/menu'));