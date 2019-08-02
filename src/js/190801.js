const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');
const targetBox = document.querySelector('#targetBox');
const newBox = '<div class="new-box box">.new-box要素</div>';

setTimeout(() => {
  container.insertAdjacentHTML('afterbegin', newBox);
  container.insertAdjacentHTML('afterend', newBox);
}, 3000);

// setTimeout(() => {
//   const parentElement = document.querySelector('#parent');
//   const childElement = document.querySelector('#child');
//   parentElement.removeChild(childElement);
// }, 3500);
setTimeout(() => {
  const childElement = document.querySelector('#child');
  childElement.remove();
}, 3500);

// setTimeout(() => {
//   container.appendChild(myBox);
// }, 3000);

// setTimeout(() => {
//   container.insertBefore(myBox1, container.firstElementChild);
// }, 3000);

// setTimeout(() => {
//   container.insertBefore(myBox2, box2);
// }, 4000);

// setTimeout(() => {
//   targetBox.before(myBox1);
// }, 3000);

// setTimeout(() => {
//   targetBox.after(myBox2);
// }, 4000);
