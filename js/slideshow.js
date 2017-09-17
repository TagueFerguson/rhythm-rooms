var slideIndex = 0;

function customSlideshow (limit) {
  var slides = window.document.getElementsByClassName('slides');
  slides[slideIndex].style.display = 'none';
  if (slideIndex === limit) {
    slideIndex = 0;
    slides[slideIndex].style.display = 'block';
  } else {
    slides[slideIndex + 1].style.display = 'block';
    slideIndex += 1;
  }
}

setInterval(function () { customSlideshow(2); }, 5000);

var navHeight = window.document.getElementById('nav-bar').clientHeight;

function addNavFiller () {
  var d = window.document;
  var heightKeeper = d.getElementById('heightKeeper');
  heightKeeper.style.height = navHeight + 'px';
  heightKeeper.style.display = 'block';
  heightKeeper.style.float = 'left';
  heightKeeper.style.position = 'relative';
  heightKeeper.style.width = '100%';
}

function removeNavFiller () {
  var d = window.document;
  d.getElementById('heightKeeper').style.display = 'none';
}

function originalNavbar () {
  var d = window.document;
  d.getElementsByClassName('oneLineWrapper')[0].style.display = 'block';
  d.getElementsByClassName('infoWrapper')[0].style.display = 'block';
  d.getElementById('logo').style.width = '130px';
  d.getElementById('logo').style.margin = '20px 0';
  d.getElementsByClassName('primary-nav')[0].style.margin = '0';
  d.getElementById('nav-bar').style.position = 'static';
}

function applyFixedNavbar () {
  var d = window.document;
  d.getElementsByClassName('oneLineWrapper')[0].style.display = 'none';
  d.getElementsByClassName('infoWrapper')[0].style.display = 'none';
  d.getElementById('logo').style.width = '75px';
  d.getElementById('logo').style.margin = '5px 0 0 0';
  d.getElementsByClassName('primary-nav')[0].style.margin = '27px 0 0 0';
  d.getElementById('nav-bar').style.position = 'fixed';
}


function changeNavbar () {
  if (window.pageYOffset > 80) {
    addNavFiller();
    applyFixedNavbar();
  } else {
    removeNavFiller();
    originalNavbar();
  }
}

changeNavbar();

function displayServices (serviceID, buttonID) {
  var serviceEl = window.document.getElementById('services-section-wrapper').children;
  for (var i = 0; i < serviceEl.length; i++) {
    if (serviceID === serviceEl[i].id) serviceEl[i].style.display = 'block';
    else serviceEl[i].style.display = 'none';
  }

  var buttons = window.document.getElementsByClassName('top-bar-element');
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].id === buttonID) {
      buttons[i].classList.remove('not-selected');
      buttons[i].classList.add('selected');
    } else {
      buttons[i].classList.remove('selected');
      buttons[i].classList.add('not-selected');
    }
  }
}

function displayNavBar () {
  var navbar = window.document.getElementById('nav-bar');
  navbar.style.background = '#ffffff';
}

function goToAbout () {
  window.scrollTo(0, window.document.getElementById('main').offsetTop - 50);
}

function goToServices () {
  window.scrollTo(0, window.document.getElementById('services').offsetTop - 100);
}

function goToContactUs () {
  window.scrollTo(0, window.document.getElementById('contactUs').offsetTop - 100);
}
