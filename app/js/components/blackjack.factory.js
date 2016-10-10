/**
 * @ngdoc service
 * @name Blackjack
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('Blackjack', Blackjack);

  Blackjack.$inject = ['Button', 'Card', 'Cards', 'Hand', 'Deck', 'CanvasEngine'];

  /**
   * @ngdoc function
   * @name Blackjack
   *
   * @param  {object} Button       Button factory
   * @param  {object} Card         Button factory
   * @param  {object} Cards        Button factory
   * @param  {object} Hand         Button factory
   * @param  {object} Deck         Button factory
   * @param  {object} CanvasEngine Button factory
   * @return {object}              self
   */
  function Blackjack(Button, Card, Cards, Hand, Deck, CanvasEngine) {

    var canvas, ctx;
    var inGame, dealerHand, playerOneHand, playerTwoHand, message;
    var btnPlayerOne, btnPlayerTwo, btnDeal, btnHit, btnStick;

    var factory = {
      init: init,
      reset: reset
    };

    return factory;

    /**
     * @ngdoc function
     * @name init
     */
    function init() {
      inGame = false;
      btnPlayerOne = Button.init('1 Player', 630, 40, 70, 30, 'orange', function() { console.log('one player callback'); deal(); });
      btnPlayerTwo = Button.init('2 Players', 710, 40, 70, 30, 'orange', function() { console.log('two player callback'); });
      btnDeal = Button.init('Deal', 630, 150, 150, 40, 'rgb(37, 87, 111', function() { console.log('deal callback'); deal(); });
      btnHit = Button.init('Hit', 630, 195, 150, 40, 'rgb(37, 87, 111', function() { console.log('hit callback'); hit(); });
      btnStick = Button.init('Stick', 630, 240, 150, 40, 'rgb(37, 87, 111', function() { console.log('stick callback'); stick();});
      reset();
    }

    /**
     * @ngdoc function
     * @name reset
     */
    function reset() {
      CanvasEngine.init();

      dealerHand = {};
      playerOneHand = {};
      playerTwoHand = {};

      CanvasEngine.drawTitle();
      CanvasEngine.drawLabels();

      btnDeal.draw();
      btnHit.draw();
      btnStick.draw();
      btnPlayerOne.draw();
    }

    /**
     * @ngdoc function
     * @name deal
     */
    function deal() {
      if (inGame === true) {
        inGame = false;
        deal();
        CanvasEngine.showMessage('Game restarted. Hit or stick?');
      } else {
        inGame = true;
        reset();
        Deck.init();
        Deck.shuffle();

        dealerHand = Hand.init([100, 170]);
        dealerHand.addCard(Deck.dealCard(true));
        dealerHand.addCard(Deck.dealCard());
        dealerHand.draw();

        playerOneHand = Hand.init([100, 420]);
        playerOneHand.addCard(Deck.dealCard());
        playerOneHand.addCard(Deck.dealCard());
        playerOneHand.draw();
      }
    }

    /**
     * @ngdoc function
     * @name hit
     */
    function hit() {
      if (inGame === true) {
        if (playerOneHand.getValue() <= 21) {
          playerOneHand.addCard(Deck.dealCard());
          playerOneHand.draw();

          if (playerOneHand.getValue() > 21) {
            inGame = false;
            message = 'You have busted. New deal?';
          } else {
            message = 'Hit or stick?';
          }
          CanvasEngine.showMessage(message);
        }
      }
    }

    /**
     * @ngdoc function
     * @name stick
     */
    function stick() {
      if (inGame === true) {
        while(dealerHand.getValue() < 17) {
          //dealerHand.valuePublic = true;
          dealerHand.addCard(Deck.dealCard(false));
          dealerHand.draw();
        }

        inGame = false;
        dealerHand.cardsInHand[0].showFront();
        dealerHand.draw();

        if (dealerHand.getValue() > 21) {
          message = 'Dealer has busted. You win!';
        } else if (dealerHand.getValue() >= playerOneHand.getValue()) {
          message = 'Dealer beat you!';
        } else {
          message = 'You won!';
        }
        CanvasEngine.showMessage(message);
      }
    }
  }

})();
