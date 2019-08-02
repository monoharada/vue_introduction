setInterval(() => {
  // 現在時刻を取得
  const now = new Date();

  // 時間の数値を取得
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // 針の角度に反映する

  // 短針（短針は時間だけでなく分にも考慮する）
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 分針
  const degM = m * (360 / 60);
  // 秒針
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);
