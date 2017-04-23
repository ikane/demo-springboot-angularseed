(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('sharedScope', SharedScope);
	
	function SharedScope() {
		return {
			template:'Name:{{about.customer.name}} - Address: {{about.customer.address}}'
		}
	}
}	
)();