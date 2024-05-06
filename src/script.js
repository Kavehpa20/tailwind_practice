const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');

hamburgerBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hidden')
})