const character = document.querySelector('.character');

document.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

function onMouseMove(event) {
  character.style.left = `${event.clientX}px`;
  character.style.top = `${event.clientY}px`;
}
