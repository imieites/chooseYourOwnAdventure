(function() {
  'use strict';

  angular
    .module('chooseYourOwnAdventure')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
