(function() {
'use strict';

/**
 * @ngdoc function
 * @name demoAngularGeneratedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoAngularGeneratedApp
 */
angular.module('demoAngularGeneratedApp')
  .controller('InfoController', InfoController);

	function InfoController($log, $http) {
		var vm = this;
	    vm.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	    vm.submit=submit;
	    
	    init();
	    
	    /////////////////////
	    function init() {
	    	$log.info('Initializing...')
	    	vm.formData={};
	    }
	    
	    
	    function submit() {
	    	$log.info(vm.formData);
	    	
	    	// Simple POST request example (passing data) :
	    	$http.post('info', vm.formData).
	    	  success(function(data, status, headers, config) {
	    		  
	    		  
	    		  $log.info('formData saved!');
	    	    // this callback will be called asynchronously
	    	    // when the response is available
	    	  }).
	    	  error(function(data, status, headers, config) {
	    		  $log.error('error - status' + status);
	    	    // called asynchronously if an error occurs
	    	    // or server returns response with an error status.
	    	  });
	    }
	}
})();