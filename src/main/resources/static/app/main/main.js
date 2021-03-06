(function() {
	'use strict';
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		
		// Now set up the states
		  $stateProvider
		    .state('main', {
		      url: "/main",
		      views: {
		    	  "main": {
		    		  templateUrl: "app/main/main.html",
		    	      controller: 'MainController',
		    	      controllerAs: 'main'
		    	  }
		      }
		    })
		    ;
	}
	
	angular
	  .module('demoAngularGeneratedApp')
	  .config(config);

})();
  