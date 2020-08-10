"use strict";

/* For Each for ie11 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
/* Scripts */


var card = document.querySelectorAll('.main__products--card'),
    buttons = document.querySelectorAll('.right-menu__item--button'),
    menuItems = document.querySelectorAll('.right-menu__item'),
    menuButtons = document.querySelectorAll('.right-menu__item--button');

(function getParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var queryFilter = queryString.split('=')[1];

  window.onload = function () {
    for (var i = 0; i < menuButtons.length; i++) {
      if (queryFilter == menuButtons[i].dataset['cat']) {
        menuButtons[i].click();
      }
    }
  };
})();

document.querySelector('.right-menu').addEventListener('click', function (event) {
  if (event.target.tagName !== "DIV") return false;

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('is-active');
  }

  ;
  event.target.parentNode.classList.add('is-active');
  var buttonCat = event.target.dataset['cat'];

  for (var _i = 0; _i < card.length; _i++) {
    card[_i].classList.remove('hide');

    if (!card[_i].classList.contains(buttonCat) && buttonCat != 'all') {
      card[_i].classList.add('hide');
    }

    ;
  }

  ; // Card visible

  var cardsVisible = [],
      cardInfo = [];

  for (var _i2 = 0; _i2 < card.length; _i2++) {
    if (!card[_i2].classList.contains('hide')) {
      cardsVisible.push(card[_i2]);
    }
  }

  ; // Card settings

  for (var _i3 = 0; _i3 < cardsVisible.length; _i3++) {
    if (innerWidth > 1200) {
      if (_i3 % 5 == 0) {
        cardsVisible[_i3].style.flexBasis = "24%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 1) {
        cardsVisible[_i3].style.flexBasis = "73.87%";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "row nowrap";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.alignItems = "center";
      }

      ;

      if (_i3 % 5 == 2) {
        cardsVisible[_i3].style.flexBasis = "24%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 3) {
        cardsVisible[_i3].style.flexBasis = "47.74%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "row nowrap";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.alignItems = "center";
      }

      ;

      if (_i3 % 5 == 4) {
        cardsVisible[_i3].style.flexBasis = "24%";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
        cardsVisible[_i3].style.display = "flex";
      }

      ;
    } else if (innerWidth > 767) {
      if (_i3 % 5 == 0) {
        cardsVisible[_i3].style.flexBasis = "48.93%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 1) {
        cardsVisible[_i3].style.flexBasis = "48.93%";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
        cardsVisible[_i3].style.display = "flex";
      }

      ;

      if (_i3 % 5 == 2) {
        cardsVisible[_i3].style.flexBasis = "31.91%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 3) {
        cardsVisible[_i3].style.flexBasis = "31.91%";
        cardsVisible[_i3].style.margin = "0 2.13% 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.alignItems = "center";
      }

      ;

      if (_i3 % 5 == 4) {
        cardsVisible[_i3].style.flexBasis = "31.91%";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
        cardsVisible[_i3].style.display = "flex";
      }

      ;
    } else {
      if (_i3 % 5 == 0) {
        cardsVisible[_i3].style.flexBasis = "100%";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 1) {
        cardsVisible[_i3].style.flexBasis = "100%";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 2) {
        cardsVisible[_i3].style.flexBasis = "100%";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 3) {
        cardsVisible[_i3].style.flexBasis = "100%";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;

      if (_i3 % 5 == 4) {
        cardsVisible[_i3].style.flexBasis = "100%";
        cardsVisible[_i3].style.display = "flex";
        cardsVisible[_i3].style.margin = "0 0 2.13% 0";
        cardsVisible[_i3].style.flexFlow = "column nowrap";
      }

      ;
    }
  }

  ;

  for (var _i4 = 0; _i4 < card.length; _i4++) {
    if (!card[_i4].classList.contains('hide')) {
      cardInfo.push(card[_i4].querySelector('.main__products--info'));
    }
  }

  ;

  for (var _i5 = 0; _i5 < cardInfo.length; _i5++) {
    if (innerWidth > 1200) {
      if (_i5 % 5 == 0) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 1) {
        cardInfo[_i5].style.width = '50%';
      }

      ;

      if (_i5 % 5 == 2) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 3) {
        cardInfo[_i5].style.width = '50%';
      }

      ;

      if (_i5 % 5 == 4) {
        cardInfo[_i5].style.width = '100%';
      }

      ;
    } else if (innerWidth > 767) {
      if (_i5 % 5 == 0) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 1) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 2) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 3) {
        cardInfo[_i5].style.width = '100%';
      }

      ;

      if (_i5 % 5 == 4) {
        cardInfo[_i5].style.width = '100%';
      }

      ;
    }

    ;
  }

  ;
});
/* LIBRARIES */