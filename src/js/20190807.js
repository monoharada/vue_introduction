const aElementList = document.querySelectorAll('a');

aElementList.forEach((element) => {
  if (element.hasAttribute('target') === false) {
    return;
  }
  if (element.getAttribute('target') !== '_blank') {
    return;
  }
  element.setAttribute('rel', 'noopner');
});
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

console.log(box1.classList.contains('red'));
console.log(box2.classList.contains('red'));

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('show');
  });
});
const information = document.querySelector('#information');
information.style.color = '#c52b84';
information.style.fontSize = '70px';
information.style.fontWeight = '600';

const strokeColor = '#c52b84';

information.style.webkitTextStroke = `2px ${strokeColor}`;
information.style.textStroke = `2px ${strokeColor}`;
information.style.textShadow = '7px 7px 0 #bf3384';
