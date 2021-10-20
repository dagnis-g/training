const hamburger = document.querySelector('.hamburger');

const topLine = document.querySelector('.top-line');
const middleLine = document.querySelector('.middle-line');
const bottomLine = document.querySelector('.bottom-line');

console.log(topLine, middleLine, bottomLine);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    topLine.classList.add('top-line-animation');
    middleLine.classList.add('middle-line-animation');
    bottomLine.classList.add('bottom-line-animation');
    topLine.classList.remove('top-line-animation-reverse');
    middleLine.classList.remove('middle-line-animation-reverse');
    bottomLine.classList.remove('bottom-line-animation-reverse');
  }
  if (!hamburger.classList.contains('active')) {
    topLine.classList.remove('top-line-animation');
    middleLine.classList.remove('middle-line-animation');
    bottomLine.classList.remove('bottom-line-animation');
    topLine.classList.add('top-line-animation-reverse');
    middleLine.classList.add('middle-line-animation-reverse');
    bottomLine.classList.add('bottom-line-animation-reverse');
  }
});
