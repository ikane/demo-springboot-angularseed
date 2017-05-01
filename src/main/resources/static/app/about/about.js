(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
			
		  $stateProvider
		    .state('about', {
		      url: "/about",
		      views: {
		    	  "main": {
		    		  templateUrl: "app/about/about.html",
		    	      controller: 'AboutController',
		    	      controllerAs: 'about'
		    	  }
		      }
		    })
		    ;
	}
})();
  