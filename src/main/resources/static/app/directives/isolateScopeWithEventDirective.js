(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('isolateScopeWithEvent', IsolateScopeWithEvent);
	
	function IsolateScopeWithEvent() {
		return {
			scope:{
				'datasource':'=',
				'action':'&'
			},
			template:'Name:{{datasource.name}} - Address: {{datasource.address}}' + 
					 '<br> <button ng-click="action()">Change Data</button>'	
		}
	}
}	
)();