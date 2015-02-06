// Código a ser executado antes da inicialização da aplicação.
var Boiler = require('boiler');

require('backbone.queryparams');

// Configura a view de loading das requisições ajax
// Boiler.setLoadingView(require('views/loading'));

// Configura a view de error das requisições ajax
// Boiler.setErrorView(require('views/error'));

Boiler.showView('#header', require('views/menu'));