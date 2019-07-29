//長方形
const rectangle = document.querySelector('.rectangle');

// ボタンをクリックしたらonClickButton()を実行する
document.querySelector('.button').addEventListener('click',onclickButton);

// ボタンをクリックする度に、長方形のグラデーション色を変える/
function onclickButton() {
  // 0~359の間のランダムな数を取得する
  const randomHue = Math.trunc(Math.random() * 360);
  // グラデーションの開始色と終了色を決定
  const randomColorStart = `hsl(${randomHue},100%,50%)`;
  const randomColorEnd = `hsl(${randomHue + 40},100%,50%)`;

  // 長方形のグラデーションのための変数（--start, --end）を変更
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}
