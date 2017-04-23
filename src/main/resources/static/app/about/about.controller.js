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
  .controller('AboutController', AboutController);

function AboutController() {
	var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    vm.message = "Message from about controller";
    
    vm.customer={
			'name':'Ibrahima',
			'address':'1 rue Antoine de Saint Exupery, 94270 Le KB'
		};
    
    vm.changeData = function() {
    	vm.customer={
    			'name':'Verifone',
    			'address':'11a rue Jacques Cartier, 78280 Guyancourt'
    		};
    };
}
})();