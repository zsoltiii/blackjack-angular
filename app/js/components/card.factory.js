/**
 * @ngdoc service
 * @name Card
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('Card', Card);

  Card.$inject = ['Cards', 'CanvasEngine'];

  /**
   * @ngdoc function
   * @name Card
   *
   * @param  {Object} Cards
   * @param  {Object} CanvasEngine
   * @return {Object} self
   */
  function Card(Cards, CanvasEngine){

    var factory = {
      init: init
    };

    return factory;


    /**
     * @ngdoc function
     * @name init
     *
     * @param  {string} suit
     * @param  {string} rank
     * @return {Object} Card
     */
    function init(suit, rank) {
      return new Card(suit, rank);
    }


    /**
     * @ngdoc function
     * @name Card
     *
     * @param  {string} suit description
     * @param  {string} rank description
     * @return {Object} self    description
     */
    function Card(suit, rank) {
      var imgSpriteX = Cards.ranks.indexOf(rank);
      var imgSpriteY = Cards.suits.indexOf(suit);
      var src = Cards.sprite;

      var Card = {
        suit: suit,
        rank: rank,
        src: src,
        draw: draw,
        showFront: showFront,
        showBack: showBack
      };

      return Card;

      /**
       * @ngdoc function
       * @name draw
       *
       * @param  {number[]} pos description
       */
      function draw(pos) {
        var imageObj = new Image();
        var spriteX = imgSpriteX * Cards.size[0];
        var spriteY = imgSpriteY * Cards.size[1];

        imageObj.onload = function() {
          CanvasEngine.drawImage(
            imageObj,
            spriteX, spriteY,
            Cards.size[0],
            Cards.size[1],
            pos[0],
            pos[1],
            Cards.size[0],
            Cards.size[1]
          );
        };
        imageObj.src = src;
        console.log('Card draw(): ' + imageObj.src);
      }


      /**
       * @ngdoc function
       * @name showBack
       */
      function showBack() {
          src = Cards.backsprite;

          if (Cards.suits.indexOf(suit) <= 1) {
              imgSpriteX = 0;
          } else {
              imgSpriteX = 1;
          }

          imgSpriteY = 0;
      }

      /**
       * @ngdoc function
       * @name showFront
       */
      function showFront() {
          src = Cards.sprite;
          imgSpriteX = Cards.ranks.indexOf(rank);
          imgSpriteY = Cards.suits.indexOf(suit);
      }
    }
  }

})();
