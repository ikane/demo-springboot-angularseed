(function() {
	'use strict';
	
	angular
	  .module('demoAngularGeneratedApp')
	  .directive('linkDemo', linkDemo);
	
	function linkDemo() {
		return {
			'restrict':'A',
			'link':function(scope, elem, attrs) {
				
				elem.on('click', function(){
					elem.html('You clicked Me');
				});
				
				elem.on('mouseenter', function(){
					elem.css('background-color', 'yellow');
					elem.css('cursor', 'pointer');
				});
				
				elem.on('mouseleave', function(){
					elem.css('background-color', 'white');
				});
			} 
		}
	}
}	
)();