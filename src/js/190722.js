const targetBox = document.querySelector('.box');

const logArea = document.querySelector('.log');

targetBox.addEventListener('touchstart', () => {
  logArea.innerHTML = 'タッチ開始';
});

targetBox.addEventListener('touchmove', () => {
  logArea.innerHTML = 'タッチ位置移動';
});

targetBox.addEventListener('touchend', () => {
  logArea.innerHTML = 'タッチ終了';
});

const log = document.querySelector('.log2');

targetBox.addEventListener('touchmove', () => {
  const touch = event.changedTouches;

  log.innerHTML = `
  ${touch[0].pageX.toFixed(2)}<br>
  ${touch[0].pageY.toFixed(2)}`;
});

const textarea = document.querySelector('.textarea');

const stringNum = document.querySelector('.string_num');

textarea.addEventListener('keyup', onkeyUp);

function onkeyUp() {
  const inputText = textarea.value;
  stringNum.innerText = inputText.length;
}
