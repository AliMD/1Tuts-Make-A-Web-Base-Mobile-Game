
(function () {
  'use strict';

  var

  //config
  cardCount = 12,

  $cardContainer = $('.memory-game__card-container'),

  makeGame = function () {
    console.log('makeGame');

    var cardsHtml = '';

    var card = $cardContainer.html();

    for(var i=0; i<cardCount; i++) {
      cardsHtml += card;
    }

    $cardContainer.html(cardsHtml);
  },

  clickCount = 0,

  takeCardsBack = function () {
    console.log('takeCardsBack');

    $('.memory-game__card').removeClass('select');

    clickCount=0;
  },

  cardClick = function () {
    console.log('cardClick');

    clickCount++;
    if (clickCount<3) {
      $(this).addClass('select');
    }

    if (clickCount>=2) {
      setTimeout(takeCardsBack, 1000);
    }
  },

  setEvents = function () {
    console.log('setEvents');

    $('.memory-game__card').click(cardClick);
  },

  main = function () {
    console.log('Memory Game, Init ;)');

    makeGame();

    setEvents();
  }
  ;

  main();
})();
