const hamburger = document.querySelector('#hamburger');
const navItems = document.querySelector('.nav-items');
hamburger.addEventListener('click', () => {
  navItems.classList.toggle('nav-active');

  if (hamburger.classList.contains('fa-bars')) {
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times');
  } else {
    hamburger.classList.add('fa-bars');
    hamburger.classList.remove('fa-times');
  }
});
