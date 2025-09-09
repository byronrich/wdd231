const navButton = document.querySelector('#nav-button');
const nav = document.querySelector('nav');

if (navButton && nav) {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    nav.classList.toggle('open');
  });
}
