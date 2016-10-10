/**
 * @ngdoc service
 * @name Deck
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('Deck', Deck);

  Deck.$inject = ['Card', 'Cards'];

  /**
   * @ngdoc function
   * @name Deck
   *
   * @param  {Object} Card
   * @param  {Object} Cards
   * @return {Object} self
   */
  function Deck(Card, Cards) {
    var deck = [];
    var factory = {
      deck: deck,
      init: init,
      shuffle: shuffle,
      dealCard: dealCard
    };

    return factory;


    /**
     * @ngdoc function
     * @name init
     *
     */
    function init() {
      Cards.suits.forEach(function(suit){
          Cards.ranks.forEach(function(rank){
            var cardInstance = angular.copy(Card.init(suit, rank));
              deck.push(cardInstance);
          });
      });
    }

    /**
     * @ngdoc function
     * @name shuffle
     */
    function shuffle() {
        shuffleHelper(deck);
    }

    /**
     * @ngdoc function
     * @name shuffleHelper
     * @desc Utility method to shuffle elements of an array
     * @param {Object} o
     * @returns {*}
     * @see http://jsfromhell.com/array/shuffle
     */
    function shuffleHelper(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) { var foo; }
        return o;
    }

    /**
     * @ngdoc function
     * @name dealCard
     *
     * @param  {boolean} showBack
     * @return {Object} card
     */
    function dealCard(showBack) {
        var card = deck.pop();
        if (showBack === true) {
          card.showBack();
        }
        return card;
    }
  }

})();
