(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('isolateScopeWithString', IsolateScopeWithString);
	
	function IsolateScopeWithString() {
		return {
			scope:{
				'name':'@',
				'address':'@'
			},
			template:'Name:{{name}} - Address: {{address}}'
		}
	}
}	
)();