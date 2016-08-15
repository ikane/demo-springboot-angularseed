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
}
})();