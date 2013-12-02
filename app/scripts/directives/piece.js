'use strict';

angular.module('ngchessApp')
  .directive('cnPiece', function () {
    return {
      template: '<img class="chessboard__piece" ng-src="images/{{team + type}}.png">',
      replace: true,
      restrict: 'E',
      link: {
        pre: function(scope, element, attrs) {
          scope.team = attrs.team;
          scope.type = attrs.type;
        }
      }
    };
  });
