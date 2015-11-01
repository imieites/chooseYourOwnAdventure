(function() {
  'use strict';

  angular
      .module('chooseYourOwnAdventure')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Inside UFO 54-40',
        'url': '/stories/1',
        'description': 'Learn to break the rules :)',
        'logo': 'ufo5440.jpg'
      },
      {
        'title': 'Your Code Name is Jonah',
        'url': '/stories/2',
        'description': 'A spy story.',
        'logo': 'codeNameJonah.jpg'
      },
      {
        'title': 'The Cave of Time',
        'url': '/stories/3',
        'description': 'A time travel story, with a cave!',
        'logo': 'caveOfTime.jpg'
      },
      {
        'title': 'The Mistery of Chimney Rock',
        'url': '/stories/4',
        'description': 'There is a black cat.',
        'logo': 'chimneyRock.jpg'
      },
      {
        'title': 'Space and Beyond',
        'url': '/stories/5',
        'description': 'A space story.',
        'logo': 'spaceAndBeyond.jpg'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
