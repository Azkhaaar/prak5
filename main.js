document.getElementById('hamburger').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});
function adjustLayout() {
  const aboutApp = document.querySelector('.about-app');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  if (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) {
      aboutApp.style.display = 'none';
      hamburgerMenu.style.display = 'block';
  } else {
      aboutApp.style.display = 'block';
      hamburgerMenu.style.display = 'none';
  }
}


window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

document.getElementById('hamburger').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden'); // Toggle visibility
});