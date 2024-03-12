const hamburgerElement = document.querySelector('.hamburger');
const hamburgerPopup = document.querySelector('.h-popup');
const hamburgerPopupOverlay = document.querySelector('.h-popup-overlay');
const closeButton = document.querySelector('.close-btn');

function openPopup() {
  hamburgerPopup.classList.add('is-visible');
  hamburgerPopupOverlay.classList.add('is-visible');
}

function closePopup() {
  hamburgerPopup.classList.remove('is-visible');
  hamburgerPopupOverlay.classList.remove('is-visible');
}

hamburgerElement.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);