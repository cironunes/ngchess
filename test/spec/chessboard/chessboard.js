'use strict';

describe('Module: Chessboard', function () {
	var scope;

	beforeEach(module('chessboard'));

  beforeEach(inject(function(_$rootScope_) {
    scope = _$rootScope_.$new();
  }));

  describe('Chessboard#Piece', function() {
    var piece;

  	beforeEach(inject(function(_$compile_) {
  		piece = angular.element('<cn-piece team="b" type="P"></cn-piece>');
    	piece =  _$compile_(piece)(scope);
      scope.$digest();
    }));

    it('should be an image', function() {
      expect(piece.html()).toBe('<img class="chessboard__piece" ng-src="images/bP.png" src="images/bP.png">');
    });
  });
});
