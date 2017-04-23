(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('isolateScope', IsolateScope);
	
	function IsolateScope() {
		return {
			scope:{},
			template:'Name:{{about.customer.name}} - Address: {{about.customer.address}}'
		}
	}
}	
)();