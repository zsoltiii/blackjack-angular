'use strict';

describe('Cards constant', function(){
  var Cards;

  beforeEach(module('angular-blackjack-beamery'));
  beforeEach(inject(function(_Cards_) {
    Cards = _Cards_;
  }));

  it('should have correct sprite value', function() {
    expect(Cards.sprite).toEqual('img/cards_jfitz.png');
  });

});
