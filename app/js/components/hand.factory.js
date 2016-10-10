/**
 * @ngdoc service
 * @name Hand
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('Hand', Hand);

  Hand.$inject = ['Cards'];

  /**
   * @ngdoc function
   * @name Hand
   *
   * @param  {Object} Cards description
   * @return {Object} self  description
   */
  function Hand(Cards) {
    var pos;
    var valuePublic = false;

    var factory = {
      init: init
    };

    return factory;

    /**
     * @ngdoc function
     * @name init
     *
     * @param  {number[]} pos description
     * @return {Object} Hand description
     */
    function init(pos) {
      return new Hand(pos);
    }

    /**
     * @ngdoc function
     * @name Hand
     *
     * @param  {number[]} pos description
     * @return {Object} self description
     */
    function Hand(pos) {
      var cardsInHand = [];
      var Hand = {
          cardsInHand: cardsInHand,
          addCard: addCard,
          getValue: getValue,
          draw: draw
      };

      return Hand;

      /**
       * @ngdoc function
       * @name addCard
       *
       * @param  {Object} Card description
       */
      function addCard(Card) {
        cardsInHand.push(Card);
      }

      /**
       * @ngdoc function
       * @name getValue
       *
       * @return {string} value
       */
      function getValue() {
        var value = 0;

        cardsInHand.forEach(function(card) {
          value += Cards.values[card.rank];

          if (card.rank === 'A' && value <= 11) {
              value += 10;
          }
        });

        return value;
      }

      /**
       * @ngdoc function
       * @name draw
       */
      function draw() {
        cardsInHand.forEach(function(card, index) {
          card.draw(
            [
              pos[0] + index * (Cards.size[0] + 5),
              pos[1]
            ]
          );
        });
      }
    }
  }
})();
