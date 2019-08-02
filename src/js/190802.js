document.querySelector('#create-modal-button').addEventListener('click', displayModalWindow);

function displayModalWindow() {
  const modalElement = document.createElement('div');

  modalElement.classList.add('modal');

  const innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = `
    <p>モーダルウィンドウの中身です</p>
    <div class="character"></div>
    `;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);
  innerElement.addEventListener('click', () => {
    closeModalWindow(modalElement);
  });
}

function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}

setTimeout(() => {
  const cloneBox = document.querySelector('#myBox').cloneNode();
  document.querySelector('.container').appendChild(cloneBox);
}, 3000);

setTimeout(() => {
  const container = document.querySelector('.container');

  const oldBox = document.querySelector('.old-Box');
  const newBox = document.createElement('div');
  newBox.textContent = '新ボックス';
  newBox.classList.add('new-box', 'box');
  container.replaceChild(newBox, oldBox);
}, 3500);
