// Exporta o jquery globalmente para compatibilidade com plugins.
jQuery = $ = require('jquery');

var	Boiler = require('boiler'),
	Backbone = require('backbone'),
	Config = require('config');

// Injeta o jquery.
Backbone.$ = $;

// registra os helpers
require('helpers');

// registra os partials
require('partials');

// Configura a view de loading das requisições ajax
// Boiler.setLoadingView(require('views/loading'), '#loading');

// Configura a view de error das requisições ajax
// Boiler.setErrorView(require('views/error'), '#error');

// Código a ser executado na inicialização da aplicação.
require('initializer');

// Registra as rotas da aplicação
Boiler.registerRoutes(require('router'));

// Logotipo do setor no rodapé
$('.logotipo-setor').attr('src', Config.CDN_URL + '/logotipo_setor.png');