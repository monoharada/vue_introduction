const userDataList = [
  {name:'鈴木',age:18},
  {name:'田中',age:27},
  {name:'佐藤',age:32},
  {name:'高橋',age:41},
  {name:'小笠原',age:56},
]

// .button要素についてイベント設定
document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  })
})

// ボタンがクリックされた時の処理
function onClickButton(event) {
  // クリックされたボタン要素
  const button = event.target;
  // ボタン要素からdata-ageを取得
  const targetAge = button.dataset.age;
  // targetAge以上のユーザー配列を作成
  const filterdList = userDataList.filter((data) => data.age >= targetAge)
  // 配列を出力
  updateList(filterdList);
}

// ユーザー配列を出力
function updateList(filterdList) {
  let listHtml = '';
  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}歳`;
  }
  document.querySelector('.user_list').innerHTML = listHtml;
}
