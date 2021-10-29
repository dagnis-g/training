const hamburger = document.querySelector('#hamburger');
const navItems = document.querySelector('.nav-items');
const copyright = document.querySelector('.copyright');
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

const date = new Date().getFullYear();

copyright.innerHTML = `${date} &copy Visas tiesības aizsargātas`;
