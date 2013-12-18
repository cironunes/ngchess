'use strict';

angular.module('chessboard', [])
	.directive('cnPiece', function() {
		return {
			restrict: 'E',
			template: '<img class="chessboard__piece" ng-src="images/{{team + type}}.png">',
			link: function(scope, element, attrs) {
				scope.team = attrs.team;
				scope.type = attrs.type;
			}
		}
	});