"use strict";

/* eslint-disable dot-notation */

/* eslint-disable consistent-return */

/* eslint-disable no-restricted-globals */

/* eslint-disable no-plusplus */

/* Scripts */

/* CSS product card */
function cardMedia() {
  var card = document.querySelectorAll('.main__products--card');
  var cardImage = document.querySelectorAll('.main__products--img');
  var cardVisible = [];

  for (var i = 0; i < card.length; i++) {
    if (!card[i].classList.contains('hide')) {
      cardVisible.push(card[i]);
    }
  }

  for (var _i = 0; _i < cardVisible.length; _i++) {
    if (innerWidth > 1579) {
      if (_i % 5 === 0) {
        cardVisible[_i].style.width = 'calc(25% - 15px)';
        cardVisible[_i].style.margin = '0 30px 0 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else if (_i % 5 === 1) {
        cardVisible[_i].style.width = 'calc(75% - 15px)';
        cardVisible[_i].style.flexDirection = 'row';
        cardVisible[_i].style.justifyContent = 'flex-start';
        cardVisible[_i].style.alignItems = 'center';
        cardVisible[_i].style.paddingRight = '50px';
        cardVisible[_i].style.margin = '0';
        cardImage[_i].style.margin = '15px auto 0';
      } else if (_i % 5 === 2) {
        cardVisible[_i].style.width = 'calc(25% - 15px)';
        cardVisible[_i].style.margin = '30px 30px 30px 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else if (_i % 5 === 3) {
        cardVisible[_i].style.width = 'calc(50% - 30px)';
        cardVisible[_i].style.margin = '30px 30px 30px 0';
        cardVisible[_i].style.flexDirection = 'row';
        cardVisible[_i].style.alignItems = 'center';
        cardVisible[_i].style.justifyContent = 'flex-start';
        cardImage[_i].style.margin = '15px 50px 0';
      } else if (_i % 5 === 4) {
        cardVisible[_i].style.width = 'calc(25% - 15px)';
        cardVisible[_i].style.margin = '30px 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      }
    } else if (innerWidth > 719) {
      if (_i % cardVisible.length === 0) {
        cardVisible[_i].style.width = 'calc(50% - 7px)';
        cardVisible[_i].style.margin = '0 15px 0 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
        cardImage[_i].style.margin = '10px auto 0';
      } else if (_i % cardVisible.length === 1) {
        cardVisible[_i].style.width = 'calc(50% - 8px)';
        cardVisible[_i].style.marginTop = '0';
        cardVisible[_i].style.marginRight = '0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else if (_i % cardVisible.length === 2) {
        cardVisible[_i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i].style.margin = '15px 15px 0 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else if (_i % cardVisible.length === 3) {
        cardVisible[_i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i].style.margin = '15px 15px 0 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else if (_i % cardVisible.length === 4) {
        cardVisible[_i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[_i].style.margin = '15px 0 0 0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      }
    } else if (innerWidth > 240) {
      if (_i % cardVisible.length !== 0) {
        cardVisible[_i].style.width = '100%';
        cardVisible[_i].style.marginTop = '20px';
        cardVisible[_i].style.marginRight = '0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      } else {
        cardVisible[_i].style.width = '100%';
        cardVisible[_i].style.marginTop = '0';
        cardVisible[_i].style.marginRight = '0';
        cardVisible[_i].style.flexDirection = 'column';
        cardVisible[_i].style.justifyContent = 'flex-start';
      }
    }
  }
}
/* Control from keyboard */


function keyboard() {
  var buttonsSite = document.querySelectorAll('.buttons');

  var _loop = function _loop(i) {
    buttonsSite[i].addEventListener('keyup', function (event) {
      buttonsSite[i].style.border = '2px solid black';

      if (event.which === 13) {
        if (event.target.tagName === 'LABEL') {
          buttonsSite[i].click();
        } else if (event.target.tagName === 'A') {
          buttonsSite[i].click();
        } else {
          buttonsSite[i].onclick();
        }
      }
    });
    buttonsSite[i].addEventListener('keydown', function () {
      buttonsSite[i].style.border = 'none';
    });
  };

  for (var i = 0; i < buttonsSite.length; i++) {
    _loop(i);
  }
}
/* When we click on the button, go to the categories already with the button pressed */


function getParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var queryFilter = queryString.split('=')[1];
  var menu = Array.from(document.querySelectorAll('.right-menu__nav'));

  window.onload = function () {
    for (var i = 0; i < menu.length; i++) {
      var category = menu[i].dataset['cat'];

      if (queryFilter === undefined) {
        break;
      }

      if (queryFilter === category) {
        menu[i].click();
      }
    }
  };
}
/* Right menu */


function rightMenu() {
  var menuItems = document.querySelectorAll('.right-menu__item');
  var menuOpen = document.querySelector('.right-menu');
  var card = document.querySelectorAll('.main__products--card');
  menuOpen.addEventListener('click', function (event) {
    if (event.target.tagName !== 'A') return false;

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    event.target.parentNode.classList.add('active');
    var buttonCat = event.target.dataset['cat'];

    for (var _i2 = 0; _i2 < card.length; _i2++) {
      card[_i2].classList.remove('hide');

      if (!card[_i2].classList.contains(buttonCat) && buttonCat !== 'all') {
        card[_i2].classList.add('hide');
      }
    }

    cardMedia();
  });
}
/* up & down */


function NumberDown() {
  var down = document.querySelector('.product__right--down');
  var input = document.querySelector('input');
  input.value--;

  if (input.value === '1') {
    down.removeEventListener('click', NumberDown);
  } else if (input.value === '') {
    down.addEventListener('click', NumberDown);
  } else {
    down.addEventListener('click', NumberDown);
  }
}

function NumberUp() {
  var input = document.querySelector('input');
  var down = document.querySelector('.product__right--down');
  input.value++;
  down.addEventListener('click', NumberDown);
}

function UpDown() {
  var up = document.querySelector('.product__right--up');
  var down = document.querySelector('.product__right--down');
  var input = document.querySelector('input');

  if (!up || !down || !input) {
    return;
  }

  up.addEventListener('click', NumberUp);
}
/* Responsive text in button 'add to card' */


function buttonMedia() {
  var buttonText = document.querySelector('.product__right--button');

  if (innerWidth < 279) {
    buttonText.innerHTML = 'add';
    buttonText.style.padding = '4px 5px';
    buttonText.style.left = '30px';
  }
}
/* Constructor */


(function Olios() {
  var container = document.querySelector('.container');
  var slider = document.querySelector('.slider');
  /* Mobile devices */

  /* Parametrs */

  if (window.orientation === 90) {
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
    if (window.orientation === 90) {
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
  buttonMedia();
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