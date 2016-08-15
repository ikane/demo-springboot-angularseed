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

function InfoController() {
	var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}
})();