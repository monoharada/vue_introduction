// const date = new Date('2019/06/01')
// date.setMonth(date.getMonth() - 1);
// console.log(date.toLocaleDateString());
// date.setDate(date.getDate() + 60);
// console.log(date.toLocaleDateString());

// const dateA = new Date('2019/06/01');
// const dateB = new Date('2019/05/01');
// const diffMsec = dateA.getTime() - dateB.getTime();
// const diffDate = diffMsec / ( 24 * 60 * 60 * 1000);
// console.log(`${diffDate}`)
// console.log(`${diffMsec}`)

// const dateC = new Date('2019/06/01 10:00:00');
// const dateD = new Date('2019/06/01 07:00:00');
// const diffMsec = dateC.getTime() - dateD.getTime();
// const diffHour = diffMsec / ( 60 * 60 * 1000);
// console.log(`${diffHour}`)
// console.log(`${diffMsec}`)

// const dateE = new Date('2019/06/01 01:10');
// const dateF = new Date('2019/06/01 00:50');
// const diffMsec = dateE.getTime() - dateF.getTime();
// const diffMin = diffMsec / ( 60 * 1000);
// console.log(`${diffMin}`)
// console.log(`${diffMsec}`)
const totalTime = 10000; // 10秒
const oldTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  // 経過したmsを取得
  const diff = currentTime - oldTime;

  // 秒数を得る
  const sec = Math.floor(diff / 1000);

  // HTMLに文字列を挿入
  document.querySelector('#log').innerHTML = `${diff}ミリ秒が経過`;
});
const timerId = setInterval(() => {
  const currentTime = Date.now();
  // 差分を求める
  const diff = currentTime - oldTime;

  // 残りmsを計算する
  const remainMsec = totalTime - diff;
  // msを整数の秒数に変換する
  const remainSec = Math.ceil(remainMsec / 1000);

  let label = `残り${remainMsec}ミリ秒`;

  // ０秒以下になったら
  if (remainMsec <= 0) {
    // タイマーを終了
    clearInterval(timerId);

    label = '終了';
  }
  document.querySelector('#log02').innerHTML = label;
});
