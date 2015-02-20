// Boiler
// Versão: 1.0.0
// Autor: Victor Bastos

if (typeof exports === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		factory(require, exports, module);
	};
}

define(function (require, exports, module) {
	var	$ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		regionManager = new (require('marionette')).RegionManager(),
		loading,
		loadingView;

	// Boiler Controller
	var Controller = {
		before: function() {},
		after: function() {},
		showView: showView,
		extend: function(methods) {
			var controller = this;

			_(methods).each(function(fn, fnName) {
				if(fnName !== 'before' && fnName !== 'after') {
					methods[fnName] = (function() {
						return function() {
							if(controller.before.apply(controller, [fnName, location.hash]) !== false) {
								if(fn.apply(controller, arguments) !== false) {
									controller.after.apply(controller, [fnName, location.hash]);
								}
							}
						};
					})();
				}
			});

			return _.extend(this, methods);
		}
	};

	// Boiler showView
	function showView(region, view, options) {
		if(!regionManager.get(region)) {
			regionManager.addRegion(region, region);
		}

		if(typeof(view) === 'string') {
			view = new (require('../application/' + view))(options);
		}

		if(typeof(view) === 'function') {
			view = new view(options);
		}

		regionManager.get(region).show(view);

		return view;
	}

	// Boiler registerRoutes
	function registerRoutes(routes) {
		var router = new Backbone.Router({});

		_(routes).each(function(callback, route) {
			router.route(route, callback);
		});

		Backbone.history.start();
	}

	// Insere o método showView no Backbone Router
	Backbone.Router.prototype.showView = showView;

	// Configura a view a ser renderizada no loading das requisições ajax
	function setLoadingView(view) {
		$(document).ajaxStart(function() {
			loading = setTimeout(function() {
				loadingView = this.showView('#main', view);
			}.bind(this), 1000);
		}.bind(this));

		$(document).ajaxComplete(function() {
			clearTimeout(loading);
			try {
				loadingView.destroy();
			} catch(err) {}
		});
	}

	// Configura a view a ser renderizada no erro das requisições ajax
	function setErrorView(view) {
		$(document).ajaxError(function(event, error) {
			clearTimeout(loading);
			view = this.showView('#main', view);
		}.bind(this));
	}

	module.exports = {
		Controller: Controller,
		showView: showView,
		registerRoutes: registerRoutes,
		setLoadingView: setLoadingView,
		setErrorView: setErrorView
	};
});