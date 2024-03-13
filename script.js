const hamburgerElement = document.querySelector('.hamburger');
const hamburgerPopup = document.querySelector('.h-popup');
const hamburgerPopupOverlay = document.querySelector('.h-popup-overlay');
const closeButton = document.querySelector('.close-btn');

function openPopup() {
  hamburgerPopup.classList.add('is-visible');
  hamburgerPopup.classList.remove('is-hidden-animation');
  hamburgerPopupOverlay.classList.add('is-visible');
}

function closePopup() {
  hamburgerPopup.classList.add('is-hidden-animation');
  hamburgerPopup.classList.remove('is-visible');
  hamburgerPopupOverlay.classList.remove('is-visible');
}

hamburgerElement.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);



// why-us scripts

const options = document.querySelectorAll('#main-header ul li');
const displayText = document.querySelector('.js-display');

showOption('staff');

function showOption(selectedOption) {
  option = document.querySelector(`.${selectedOption}`);

  turnOffSelectedOption();
  option.classList.toggle('js-chosen');

  displayParagraph(selectedOption);
}

function turnOffSelectedOption() {
  const selectedOption = document.querySelector('.js-chosen')

  if (selectedOption) {
    selectedOption.classList.remove('js-chosen')
  }
}

function displayParagraph(context) {
  if (context === 'staff') {
    displayText.innerHTML = "Our dedicated team is always on hand to ensure a smooth and enjoyable experience for all players on Baltimore RP."
  } else if (context === 'unique') {
    displayText.innerHTML = "Baltimore RP offers a one-of-a-kind experience you won't find anywhere else."
  } else if (context === 'community') {
    displayText.innerHTML = "We foster a welcoming and respectful environment where fair play is paramount."
  } else if (context === 'stability') {
    displayText.innerHTML = "Baltimore RP is built on a strong foundation, ensuring a smooth and lag-free gameplay experience."
  } else if (context === 'fair-play') {
    displayText.innerHTML = "We take a zero-tolerance stance on cheating and griefing, guaranteeing a level playing field for everyone."
  } 
}