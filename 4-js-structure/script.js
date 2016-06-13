
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


  main = function () {
    console.log('Memory Game, Init ;)');

    makeGame();

    console.log(cardCount);
  }
  ;

  main();
})();
