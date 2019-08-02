const character = document.querySelector('.character');
const box = document.querySelector('.box');
const fileZone = document.querySelector('.file-zone');

fileZone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

fileZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const transFerdFiles = event.dataTransfer.files;
  displayImages(transFerdFiles);
});
function displayImages(transFerdFiles) {
  const imageFileList = [];

  const fileNum = transFerdFiles.length;

  for (let i = 0; i < fileNum; i++) {
    if (transFerdFiles[i].type.match('image.*') === false) {
      return;
    }
    imageFileList.push(transFerdFiles[i]);
  }

  const imagePreviewArea = document.querySelector('.image-list');

  for (const imageFile of imageFileList) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener('load', (event) => {
      const image = new Image();
      image.src = event.target.result;
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
}

// box.addEventListener('dragover', (event) => {
//   event.preventDefault();
// });
// box.addEventListener('drop', () => {
//   console.log('dropイベント');
// });
// box.addEventListener('dragover', () => {
//   console.log('dragoverイベント');
// });
// box.addEventListener('dragleave', () => {
//   console.log('dragleaveイベント');
// });

// character.addEventListener('dragstart', () => {
//   console.log('dragstartイベント');
// });
// character.addEventListener('drag', () => {
//   console.log('dragイベント');
// });
// character.addEventListener('dragend', () => {
//   console.log('dragendイベント');
// });
