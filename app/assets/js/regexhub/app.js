/**
 * User: Rias
 * Date: 3/8/15
 * Time: 12:16 PM
 * Description : Description will be here
 * File name : app.js
 */
(function() {
	"use strict";
	var app = angular.module("ras.regex",["ui.router","ngSanitize","ngAnimate"]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("home", {
					"url" : "/",
					"templateUrl" : "/templates/home.html"
				})

			$urlRouterProvider.otherwise("/");
	});
})();