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
    cardImage = document.querySelectorAll('.main__products--img'),
    cardInfo = document.querySelectorAll('.main__products--info'),
    buttons = document.querySelectorAll('.right-menu__item--button'),
    menuItems = document.querySelectorAll('.right-menu__item'),
    menuButtons = document.querySelectorAll('.right-menu__item--link'),
    menu = Array.from(document.querySelectorAll('.right-menu__nav')),
    buttonsSite = document.querySelectorAll('.buttons'),
    cardVisible = [],
    container = document.querySelector('.container'),
    containerProduct = document.querySelector('.container-product'),
    slider = document.querySelector('.slider');
/* Constructor */

(function Olios() {
  /* Mobile devices */

  /* Parametrs */
  if (window.orientation == 90) {
    container.style.height = 'calc(100vh - 17vh)';

    if (slider) {
      slider.style.height = 'calc(100vh - 17vh)';
    }
  } else {
    container.style.height = 'calc(100vh - 10vh)';

    if (slider) {
      slider.style.height = 'calc(100vh - 10vh)';
    }
  }
  /* Parametrs on resize */


  window.addEventListener('orientationchange', function () {
    if (window.orientation == 90) {
      container.style.height = 'calc(100vh - 17vh)';

      if (slider) {
        slider.style.height = 'calc(100vh - 17vh)';
      }
    } else {
      container.style.height = 'calc(100vh - 10vh)';

      if (slider) {
        slider.style.height = 'calc(100vh - 10vh)';
      }
    }
  });
  window.addEventListener('resize', cardMedia);
  /* Functions */

  getParams();
  rightMenu();
  cardMedia();
  buttonText();
  UpDown();
  keyboard();
  /* Mobile devices */

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    container.style.height = '100vh';

    if (slider) {
      slider.style.height = '100vh';
    }
  }
})();
/* Control from keyboard */


function keyboard() {
  var _loop = function _loop(i) {
    buttonsSite[i].addEventListener('keyup', function (event) {
      buttonsSite[i].style.border = '2px solid black';

      if (event.which == 13) {
        if (event.target.tagName == "LABEL") {
          buttonsSite[i].click();
        } else if (event.target.tagName == "A") {
          buttonsSite[i].click();
        } else {
          buttonsSite[i].onclick();
        }
      }
    });
    buttonsSite[i].addEventListener('keydown', function () {
      buttonsSite[i].style.border = "none";
    });
  };

  for (var i = 0; i < buttonsSite.length; i++) {
    _loop(i);
  }
}

;
/* When we click on the button, go to the categories already with the button pressed */

function getParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var queryFilter = queryString.split('=')[1];

  window.onload = function () {
    for (var i = 0; i < menu.length; i++) {
      var category = menu[i].dataset['cat'];

      if (queryFilter === undefined) {
        break;
      }

      if (queryFilter == category) {
        menu[i].click();
      }
    }
  };
}

;
/* Right menu */

function rightMenu() {
  var menu = document.querySelector('.right-menu');
  menu.addEventListener('click', function (event) {
    if (event.target.tagName !== "A") return false;
    cardVisible.length = 0;

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    ;
    event.target.parentNode.classList.add('active');
    var buttonCat = event.target.dataset['cat'];

    for (var _i = 0; _i < card.length; _i++) {
      card[_i].classList.remove('hide');

      if (!card[_i].classList.contains(buttonCat) && buttonCat != 'all') {
        card[_i].classList.add('hide');
      }

      ;
    }

    ;
    cardMedia();
  });
}

;
/* up & down */

function UpDown() {
  var up = document.querySelector('.product__right--up'),
      down = document.querySelector('.product__right--down'),
      input = document.querySelector('input');

  if (!up || !down || !input) {
    return;
  } else {
    var NumberUp = function NumberUp() {
      input.value++;
      down.addEventListener('click', NumberDown);
    };

    var NumberDown = function NumberDown() {
      input.value--;

      if (input.value === '1') {
        down.removeEventListener('click', NumberDown);
      } else if (input.value === '') {
        down.addEventListener('click', NumberDown);
      } else {
        down.addEventListener('click', NumberDown);
      }
    };

    up.addEventListener('click', NumberUp);
  }
}

;
/* Responsive text in button 'add to card' */

function buttonText() {
  var buttonText = document.querySelector('.product__right--button');

  if (innerWidth < 279) {
    buttonText.innerHTML = 'add';
    buttonText.style.padding = '4px 5px';
    buttonText.style.left = '30px';
  }
}
/* CSS product card */


function cardMedia() {
  for (var i = 0; i < card.length; i++) {
    if (!card[i].classList.contains('hide')) {
      cardVisible.push(card[i]);
    }
  }

  for (var _i2 = 0; _i2 < cardVisible.length; _i2++) {
    if (innerWidth > 1579) {
      if (_i2 % 5 == 0) {
        cardVisible[_i2].style.width = 'calc(25% - 15px)';
        cardVisible[_i2].style.margin = '0 30px 0 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else if (_i2 % 5 == 1) {
        cardVisible[_i2].style.width = 'calc(75% - 15px)';
        cardVisible[_i2].style.flexDirection = 'row';
        cardVisible[_i2].style.justifyContent = 'flex-start';
        cardVisible[_i2].style.alignItems = 'center';
        cardVisible[_i2].style.margin = '0';
      } else if (_i2 % 5 == 2) {
        cardVisible[_i2].style.width = 'calc(25% - 15px)';
        cardVisible[_i2].style.margin = '30px 30px 30px 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else if (_i2 % 5 == 3) {
        cardVisible[_i2].style.width = 'calc(50% - 30px)';
        cardVisible[_i2].style.margin = '30px 30px 30px 0';
        cardVisible[_i2].style.flexDirection = 'row';
        cardVisible[_i2].style.alignItems = 'center';
        cardVisible[_i2].style.justifyContent = 'flex-start';
        cardImage[_i2].style.margin = '0 50px';
      } else if (_i2 % 5 == 4) {
        cardVisible[_i2].style.width = 'calc(25% - 15px)';
        cardVisible[_i2].style.margin = '30px 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      }
    } else if (innerWidth > 719) {
      if (_i2 % cardVisible.length == 0) {
        cardVisible[_i2].style.width = 'calc(50% - 7px)';
        cardVisible[_i2].style.margin = '0 15px 0 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
        cardImage[_i2].style.margin = '10px auto 0';
      } else if (_i2 % cardVisible.length == 1) {
        cardVisible[_i2].style.width = 'calc(50% - 8px)';
        cardVisible[_i2].style.marginTop = '0';
        cardVisible[_i2].style.marginRight = '0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else if (_i2 % cardVisible.length == 2) {
        cardVisible[_i2].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i2].style.margin = '15px 15px 0 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else if (_i2 % cardVisible.length == 3) {
        cardVisible[_i2].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i2].style.margin = '15px 15px 0 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else if (_i2 % cardVisible.length == 4) {
        cardVisible[_i2].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i2].style.margin = '15px 0 0 0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      }
    } else {
      if (_i2 % cardVisible.length != 0) {
        cardVisible[_i2].style.width = '100%';
        cardVisible[_i2].style.marginTop = '20px';
        cardVisible[_i2].style.marginRight = '0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      } else {
        cardVisible[_i2].style.width = '100%';
        cardVisible[_i2].style.marginTop = '0px';
        cardVisible[_i2].style.marginRight = '0';
        cardVisible[_i2].style.flexDirection = 'column';
        cardVisible[_i2].style.justifyContent = 'flex-start';
      }
    }
  }
}

;