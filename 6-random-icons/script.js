
(function () {
  'use strict';

  var

  //config
  cardCount = 12,
  iconArr = [
    'fa-ambulance',
    'fa-asterisk',
    'fa-bell',
    'fa-cab',
    'fa-check-square',
    'fa-cloud',
    'fa-child',
    'fa-briefcase',
    'fa-book',
    'fa-binoculars',
    'fa-chrome',
    'fa-coffee',
    'fa-envira',
    'fa-fighter-jet',
    'fa-firefox',
    'fa-futbol-o',
    'fa-gittip',
    'fa-globe',
    'fa-institution',
    'fa-medkit',
    'fa-motorcycle',
    'fa-mobile',
    'fa-volume-up'
  ],

  rnd = function (max) {
    return Math.floor(Math.random() * max);
    // floor yani kaf va 3.9 ra 3 mikonad
    // random() ham beyn 0 ta 1 ast vali 1 nakhahad bood
    // pas khode max nakhayad bood!
  },

  randArr = function (arr) {
    // be shekl random 50 bar jaye khoone haye mokhtalef ro dar array ba ham avaz mikonim
    // ghatan ravesh osooli nist vali shayad sadetarin ravesh bashad

    var i, tmp, r1, r2, max = arr.length;
    for (i=0; i<50; i++) {
      r1 = rnd(max);
      r2 = rnd(max);
      tmp = arr[r1]; // chon mikhahim khooneye r1 ro taghir bedim aval az r1 dar tmp backup migirim
      arr[r1] = arr[r2];
      arr[r2] = tmp;
    }

    // ravesh dorostesh ke kami pichide tare
    // dastoor sort ra dar mdn bekhoonid ta motevajeh shavid!

    // arr.sort(function(){
    //   return rnd(3)-1;
    // });
  },

  makeCardsRandIcon = function () {
    console.log('makeCardsRandIcon');

    randArr(iconArr);
    console.log(iconArr);

    //yek array az card ha misazim
    var $cardArr = [];
    var $cards = $('.memory-game__card');

    for (var i=0; i<$cards.length; i++) {
      $cardArr.push( $cards.eq(i) );
      //push be entehaye array yek khoone ezafe mikonad
      //.eq az dastoorat zepto va jquery ast va yek item khas ro bar migardanad
      //masalad $cards.eq(0) card aval va $cards.eq(9) card daho
      //deghat konid ke harkodam az khoonehaye $cardArr ye object zepto ast
    }

    //hala $cardArr ro ham mesl icon ha random mikonim
    randArr($cardArr);

    //ye for ba step haye 2tayi be 2 card (ke random hastand) ye icon midahad
    //mojaddad deghat konid ke harkodam az khoonehaye $cardArr ye object zepto ast va masalan $cardArr[0].html() kar mikonad
    var iconIndex = 0;
    for (i=0; i<$cardArr.length; i+=2) {
      $cardArr[i]
      .find('i.fa') // dastoor find tag i ke class fa darad ra dar dakhey card i peyda mikonad
      .addClass(iconArr[iconIndex]) // hala behesh class morede nazar ro midim
      ;

      // 2 card yek shekl mikhahim pas baraye i+1 ham tekrar mikonid
      // deghat konid ke chon tartib $cardArr ro beham rikhtim i+1 card kenari nist
      $cardArr[i+1]
      .find('i.fa')
      .addClass(iconArr[iconIndex])
      ;

      iconIndex++; // va baraye card badi icon badi ...
      // chon i+=2 mishavad az i estefade nakardam albate mishod i/2 ham nevesht ke kami khanayi code ro payin miavord
    }

    //baraye test khorooji hameye card haro be halate select mibarim
    // $cards.addClass('select');
  },

  $cardContainer = $('.memory-game__card-container'),

  makeGame = function () {
    console.log('makeGame');

    var cardsHtml = '';

    var card = $cardContainer.html();

    for(var i=0; i<cardCount; i++) {
      cardsHtml += card;
    }

    $cardContainer.html(cardsHtml);

    makeCardsRandIcon();
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
