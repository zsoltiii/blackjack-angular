/**
 * @ngdoc service
 * @name Button
 * @namespace components
 */
(function() {
  'use strict';

  angular
    .module('angular-blackjack-beamery')
    .factory('Button', Button);

  Button.$inject = ['CanvasEngine'];

  /**
   * @ngdoc function
   * @name Button
   *
   * @param  {Object} CanvasEngine
   * @return {Object} self
   */
  function Button(CanvasEngine) {

    var factory = {
      init: init
    };

    return factory;

    /**
     * @ngdoc function
     * @name init
     *
     * @param  {string} text
     * @param  {number} x
     * @param  {number} y
     * @param  {number} width
     * @param  {number} height
     * @param  {string} fill
     * @param  {funtion} callback
     * @return {Object} Button
     */
    function init(text, x, y, width, height, fill, callback) {
      return new Button(text, x, y, width, height, fill, callback);
    }

    /**
     * @ngdoc function
     * @name Button
     *
     * @param  {string} text
     * @param  {number} x
     * @param  {number} y
     * @param  {number} width
     * @param  {number} height
     * @param  {string} fill
     * @param  {function} callback
     * @return {Object} self
     */
    function Button(text, x, y, width, height, fill, callback) {

      return {
        draw: draw,
        handleEvent: handleEvent
      };

      /**
       * @ngdoc function
       * @name draw
       */
      function draw() {
        var eventSubject = CanvasEngine.drawButton(text, x, y, width, height, fill);
        eventSubject.addEventListener('mousedown', handleEvent);
      }

      /**
       * @ngdoc function
       * @name handleEvent
       *
       * @param  {Object} evt
       */
      function handleEvent(evt) {
        if (evt.offsetX >= x &&
          evt.offsetX <= x + width &&
          evt.offsetY >= y &&
          evt.offsetY <= y + height) {
            callback();
        }
      }
    }
  }

})();
