setTimeout(() => {
  const oldBox = document.querySelector('.old-box');
  const newBox = document.createElement('div');
  newBox.classList.add('new-box', 'box');
  newBox.textContent = '新ボックス';

  oldBox.replaceWith(newBox);
}, 3000);

const weather = document.querySelector('#weather');
setTimeout(() => {
  weather.textContent = '気温は24どの予定です';
}, 3000);
