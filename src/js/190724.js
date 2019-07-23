const boxElement = document.querySelector('#myBox');

boxElement.addEventListener('click', () => {
  boxElement.innerHTML = 'クリックされました';
});

setTimeout(() => {
  boxElement.dispatchEvent(new Event('click'));
}, 1000);

let enableMouseWheel = true;

document.querySelector('#mouseWheelToggle').addEventListener('click', (event) => {
  enableMouseWheel = event.target.checked === false;
});

document.querySelector('.scrollable-element').addEventListener('wheel', (event) => {
  if (enableMouseWheel === true) {
    return;
  }
  event.preventDefault();
});
