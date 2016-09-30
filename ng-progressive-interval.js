(function() {
  "use strict";

  angular
    .module("retoheusser.progressive-interval", [])
    .factory("progressiveInterval", ["$timeout", progressiveIntervalService]);

  function progressiveIntervalService($timeout) {

    return function (intervalFunction, initialDelay, maxDelay, maxCount) {
      var executionCount = 0, running = true;

      function execute() {
        $timeout(function () {
          if (running && (!maxCount || executionCount <= maxCount)) {
            intervalFunction();
            executionCount++;
            initialDelay *= 2;
            execute();
          }
        }, (!maxDelay || initialDelay <= maxDelay) ? initialDelay : maxDelay);
      }

      execute();

      return function () {
        running = false;
      };
    };
  }

})();
