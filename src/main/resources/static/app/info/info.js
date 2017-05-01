(function() {
	'use strict';
	
angular
  .module('demoAngularGeneratedApp')
  .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
	
	// Now set up the states
	  $stateProvider
	    .state('info', {
	      url: "/info",
	      views: {
	    	  "main": {
	    		  templateUrl: "app/info/info.html",
	    	      controller: 'InfoController',
	    	      controllerAs: 'info'
	    	  }
	      }
	    })
	    ;
}
})();
  