// Exporta o jquery globalmente para compatibilidade com plugins.
jQuery = $ = require('jquery');

var	Boiler = require('boiler'),
	Backbone = require('backbone'),
	Config = require('config');

// Injeta o jquery.
Backbone.$ = $;

// registra os componentes
require('components');

// registra os helpers
require('helpers');

// registra os partials
require('partials');

// Código a ser executado na inicialização da aplicação.
require('initializer');

// Registra as rotas da aplicação
Boiler.registerRoutes(require('router'));