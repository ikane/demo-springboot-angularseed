(function() {
	'use strict';
	
	/**
	 * @ngdoc overview
	 * @name demoAngularGeneratedApp
	 * @description
	 * # demoAngularGeneratedApp
	 *
	 * Main module of the application.
	 */
	angular
	  .module('demoAngularGeneratedApp', [    
	    'ui.router', 
	  ])
	  .config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		
		  $urlRouterProvider.otherwise("/main");
	}
})();