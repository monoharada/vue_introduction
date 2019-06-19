import { worker } from 'cluster';

// 時間 分 秒
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

update();

// 現在時刻を表示する処理
function update() {
  const currentTime = new Date();

  // 時間の表示
  const hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);

  // 分の表示
  const minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);

  // 秒の表示
  const second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);

  // 次のフレームで再度update()を実行する
  requestAnimationFrame(update);
}
// 2桁の表記になるよう文字列冒頭に0をつける関数
// @param num
// @returns {string}

function addZeroPadding(num) {
  return String(num).padStart(2, '0');
}
