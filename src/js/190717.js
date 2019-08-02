const option = {
  once: true,
};
const button = document.querySelector('.button');
button.addEventListener('click', onClickButton, option);

function onClickButton() {
  console.log('kurikkusareta');
}

const box = document.querySelector('.box');
box.addEventListener('click', onClickBox);

setTimeout(() => {
  box.removeEventListener('click', onclickBox);
}, 3000);

function onClickBox() {
  console.log('クリックされました');
}

// console.log(boxNum);
// window.addEventListener('DOMContentLoaded', () => {
const boxNum = document.querySelectorAll('.boxz').length;
console.log(boxNum);
// });
