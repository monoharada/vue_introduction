// window.addEventListener('resize', resizeHandler);

// function resizeHandler(event) {
//   // 新しい画面サイズ
//   const w = innerWidth;
//   const h = innerHeight;

//   document.querySelector('.value-width').innerHTML = `横幅は${w}pxです`
//   document.querySelector('.value-height').innerHTML = `縦幅は${h}pxです`
// }
const dpr = window.devicePixelRatio;

const w = 200;
const h = 200;

const canvas = document.querySelector('canvas');
canvas.width = w * dpr;
canvas.height = h * dpr;
canvas.style.width = w + 'px';
canvas.style.height = h + 'px';

const context = canvas.getContext('2d');

context.scale(dpr, dpr);

context.fillStyle = 'red';
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI)
context.fill()

document.querySelector('.log').innerHTML = `現在のデバイスピクセルは${dpr}です`
