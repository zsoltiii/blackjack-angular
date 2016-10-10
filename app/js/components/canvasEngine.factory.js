/**
 * @ngdoc service
 * @name CanvasEngine
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('CanvasEngine', CanvasEngine);

  CanvasEngine.$inject = [];

  /**
   * @ngdoc function
   * @name CanvasEngine
   *
   * @return {Object} self
   */
  function CanvasEngine() {
    var canvas, ctx;

    var factory = {
      init: init,
      drawTitle: drawTitle,
      drawLabels: drawLabels,
      drawButton: drawButton,
      drawImage: drawImage,
      showMessage: showMessage
    };

    return factory;

    /**
     * @ngdoc function
     * @name init
     */
    function init() {
      canvas = document.getElementById('canvas');
      canvas.width = 800;
      canvas.height = 600;
      ctx = canvas.getContext('2d');
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * @ngdoc function
     * @name drawTitle
     */
    function drawTitle() {
      var blackjackText = 'B l a c k j a c k';
      ctx.fillStyle = 'orange';
      ctx.font = '52px Arial';
      ctx.fillText(blackjackText, (canvas.width - ctx.measureText(blackjackText).width) / 2, 60);
    }

    /**
     * @ngdoc function
     * @name drawLabels
     */
    function drawLabels() {
      ctx.fillStyle = 'white';
      ctx.font = '22px Arial';
      ctx.fillText('Dealer', 100, 150);
      ctx.fillText('Player', 100, 400); /// move to Hand factory?

      ctx.font = '18px Arial';
      ctx.fillText('N e w   G a m e', 643, 30);
    }

    /**
     * @ngdoc function
     * @name drawButton
     *
     * @param  {string} text
     * @param  {number} x
     * @param  {number} y
     * @param  {number} width
     * @param  {number} height
     * @param  {string} fill
     * @return {Object} canvas
     */
    function drawButton(text, x, y, width, height, fill) {
      ctx = canvas.getContext('2d');
      ctx.fillStyle = fill;
      ctx.fillRect(x, y, width, height);

      var fontSize = height / 5 * 2;
      ctx.font = fontSize + 'px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(
          text,
          x + (width / 2) - (ctx.measureText(text).width / 2),
          y + (height / 2) + (fontSize / 2)
      );
      return canvas;
    }

    /**
     * @ngdoc function
     * @name drawImage
     *
     * @param  {Object} imageObj
     * @param  {number} spriteX
     * @param  {number} spriteY
     * @param  {number} sizeX
     * @param  {number} sizeY
     * @param  {number} posX
     * @param  {number} posY
     */
    function drawImage(imageObj, spriteX, spriteY, sizeX, sizeY, posX, posY) {
      ctx.drawImage(imageObj, spriteX, spriteY, sizeX, sizeY, posX, posY, sizeX, sizeY);
    }

    /**
     * @ngdoc function
     * @name showMessage
     *
     * @param  {string} text
     */
    function showMessage(text) {
      ctx.fillStyle = 'green';
      ctx.fillRect(100, 270, 400, 100);

      ctx.fillStyle = 'orange';
      ctx.font = '20px Arial';
      ctx.fillText(text, 130, 330);
    }
  }

})();
