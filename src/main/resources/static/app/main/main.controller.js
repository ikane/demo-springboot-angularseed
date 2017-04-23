(function() {
	'use strict';
	
	/**
	 * @ngdoc function
	 * @name demoAngularGeneratedApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the demoAngularGeneratedApp
	 */
	angular.module('demoAngularGeneratedApp')
	  .controller('MainController', MainController);
	
	function MainController () {
	    var vm = this;
		vm.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Bootstrap',
	      'Karma'
	    ];
		
		vm.customer={
			'name':'Ibrahima',
			'address':'1 rue Antoine de Saint Exupery, 94270 Le KB'
		};
	}
})();