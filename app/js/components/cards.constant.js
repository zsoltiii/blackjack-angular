/**
 * @ngdoc constant
 * @name Cards
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .constant('Cards', {
      'suits': ['C', 'S', 'H', 'D'],
      'ranks': ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'],
      'values': {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'T':10, 'J':10, 'Q':10, 'K':10},
      'sprite': '/app/img/cards_jfitz.png',
      'backsprite': '/app/img/card_jfitz_back.png',
      'size': [72, 96],
      'center': [36, 48]
    });

})();
