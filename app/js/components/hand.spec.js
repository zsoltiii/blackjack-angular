'use strict';

describe('Hand factory', function(){
  var Hand;

  beforeEach(module('angular-blackjack-beamery'));
  beforeEach(inject(function(_Hand_) {
    Hand = _Hand_;
  }));

  it('should exist', function() {
    expect(Hand).toBeDefined();
  });

  it('init() should exist', function() {
    expect(Hand.init).toBeDefined();
  });

  it('cardsInHand should return empty array', function() {
    var myHand = Hand.init();
    expect(myHand.cardsInHand).toEqual([]);
  });

  describe('Inner methods', function() {
    var Card;

    beforeEach(inject(function(_Card_) {
      Card = _Card_;
    }));

    it('cardsInHand should return empty array', function() {
      var myHand = Hand.init();
      expect(myHand.cardsInHand).toEqual([]);
    });

    it('cardsInHand should return the right card', function() {
      var myHand = Hand.init();

      var myCard = Card.init('5', 'D');
      myHand.addCard(myCard);
      expect(myHand.cardsInHand).toEqual([myCard]);

      var mySecondCard = Card.init('9', 'D');
      myHand.addCard(mySecondCard);
      expect(myHand.cardsInHand).toEqual([myCard, mySecondCard]);
    });
  });
});
