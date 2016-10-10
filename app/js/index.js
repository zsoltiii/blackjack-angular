/**
 * @ngdoc controller
 * @name GameController
 * @desc Main Game controller
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .controller('GameController', GameController);

  /**
   * @ngdoc function
   * @name GameController
   * @desc Main Game controller
   *
   * @param  {object} Card      Card factory
   * @param  {object} Cards     Cards factory
   * @param  {object} Button    Button factory
   * @param  {object} Blackjack Blackjack factory
   * @param  {object} Hand      Hand factory
   */
  function GameController(Card, Cards, Button, Blackjack, Hand) {
    Blackjack.init();
  }

})();
