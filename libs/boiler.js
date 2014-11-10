// Boiler
// Versão: 1.0.0
// Autor: Victor Bastos

if (typeof exports === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		factory(require, exports, module);
	};
}

define(function (require, exports, module) {
	var Ractive = require('ractive'),
		_ = require('underscore'),
		Backbone = require('backbone');

	// Modifica o Ractive para manter os métodos antigos do Marionette
	Ractive.prototype.onconstruct = function(options) {
		this.oninit = this.oninit || this.initialize;
		this.onrender = this.onrender || this.onRender;
		this.oncomplete = this.oncomplete || this.onAfterRender || this.onShow;
		this.onteardown = this.onteardown || this.onClose;
	};

	// Boiler View
	var View = Ractive;

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
		if(typeof(view) === 'string') {
			view = new (require(view))(options);
		}
		if(typeof(view) === 'function') {
			view = new view(options);
		}
		view.render(region);
	}

	// Boiler registerRoutes
	function registerRoutes(routes) {
		var router = new Backbone.Router({});

		_(routes).each(function(callback, route) {
			router.route(route, callback);
		});

		Backbone.history.start();
	}

	module.exports = {
		View: View,
		Controller: Controller,
		showView: showView,
		registerRoutes: registerRoutes
	};
});