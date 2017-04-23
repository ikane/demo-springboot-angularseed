(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('isolateScopeWithObject', IsolateScopeWithObject);
	
	function IsolateScopeWithObject() {
		return {
			scope:{
				'datasource':'='				
			},
			template:'Name:{{datasource.name}} - Address: {{datasource.address}}' + 
					 '<br> <button ng-click="datasource.name=\'Fred\'">Change</button>'	
		}
	}
}	
)();