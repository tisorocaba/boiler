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
	var Controller = function() {};
	Controller.prototype.before = function() {};
	Controller.prototype.after = function() {};
	Controller.prototype.showView = showView;
	Controller.prototype.extend = function(methods) {

		var instance = _.extend({}, Backbone.Router.prototype, Controller.prototype, this, methods);

		_(methods).each(function(fn, fnName) {
			if(fnName !== 'before' && fnName !== 'after') {
				methods[fnName] = (function() {
					return function() {
						if(instance.before.apply(instance, [fnName, location.hash]) !== false) {
							if(fn.apply(instance, arguments) !== false) {
								instance.after.apply(instance, [fnName, location.hash]);
							}
						}
					};
				})();
			}
		});

		return _.extend({}, Backbone.Router.prototype, Controller.prototype, methods);
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
	function setLoadingView(view, region) {
		$(document).ajaxStart(function() {
			loading = setTimeout(function() {
				loadingView = this.showView(region, view);
			}.bind(this), 1000);
		}.bind(this));

		$(document).ajaxStop(function() {
			clearTimeout(loading);
			try {
				loadingView.destroy();
			} catch(err) {}
		});
	}

	// Configura a view a ser renderizada no erro das requisições ajax
	function setErrorView(view, region) {
		$(document).ajaxError(function(event, error) {
			clearTimeout(loading);
			this.showView(region, view, {model: new Backbone.Model(error)});
		}.bind(this));
	}

	module.exports = {
		Controller: new Controller(),
		showView: showView,
		registerRoutes: registerRoutes,
		setLoadingView: setLoadingView,
		setErrorView: setErrorView
	};
});
