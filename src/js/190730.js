const nodeList = document.querySelectorAll('.box');
nodeList.forEach((targetBox) => {
  targetBox.addEventListener('click', () => {
    console.log(targetBox.textContent);
  });
});

const themeChangeButton = document.querySelector('.theme-change-button');

themeChangeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
});

const parentElement = document.querySelector('.parenet');
console.log(parentElement.children);

const { firstElementChild } = parentElement;
console.log(firstElementChild.textContent);
console.log(firstElementChild.nextElementSibling.textContent);
console.log(firstElementChild.parentNode.textContent);
