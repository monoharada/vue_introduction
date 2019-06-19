const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

// name-inputに文字を入力するたびに処理を実行する
nameInput.addEventListener('input', () => {
  // 入力された文字を取得する
  const inputStr = nameInput.value;
  // 入力された文字を小文字に変換する
  const normalStr = inputStr.toLowerCase();
  // 文字にテストがふくまれていれば警告を表示する
  if (normalStr.includes('test')) {
    warningMessage.textContent = '「test」が含まれています';
  } else {
    warningMessage.textContent = '';
  }
});

// 今日の日付を取得
const today = new Date();

// #main内に、HTMLコードを動的に書きだす
document.querySelector('#main').innerHTML = `
<h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
<p>東京は、晴れでしょう</p>`;

// 正規表現を使ってユーザーエージェントがIOSか調べる
if (/iphone|ipod|ipad/.test(navigator.userAgent)) {
  alert('アクセスしているデバイスはiOSです');
}
const phoneNumberText = document.querySelector('#phoneNumberText');
// 警告メッセージ
const warningMessage02 = document.querySelector('#warningMessage');

// 文字が入力される度に、内容のチェックを行う
phoneNumberText.addEventListener('keyup', () => {
  // 入力された電話番号
  const phoneNumber = phoneNumberText.value;
  // 電話番号に「-」が含まれている場合はから文字に変換する
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  // 0からはじまる10桁か11桁の数字かどうかチェックする
  if (!/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber)) {
    warningMessage02.innerText = '電話番号を正しく入力してください';
  } else {
    warningMessage02.innerText = '';
  }
});
