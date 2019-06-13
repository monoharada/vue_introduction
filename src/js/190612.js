// 検索語
const searchWordText = document.querySelector('#search-word-input');

// 県名のリスト
const prefectureList = document.querySelectorAll('#prefecture-list button');

// 文字が入力される度に、内容のチェックを行う
searchWordText.addEventListener('keyup', () => {
  // 検索語の最初
  const searchWord = searchWordText.value;

  // 県名リストについてループ
  // elementはそれぞれの要素にあたる
  prefectureList.forEach((element) => {
    // 検索語が無ければ、全ての要素を表示する
    if (!searchWord || searchWord === '') {
      element.classList.remove('hide');
      return;
    }
    // 県名を取得
    const prefectureName = element.dataset.name;
    // フリガナを取得
    const { phonetic } = element.dataset;

    // 検索語の最初の１文字が一致するかどうかで、hideクラスの付与を決定する
    // hideクラスが付与された要素は画面上から削除される
    if (
      searchWord.charAt(0) === prefectureName.charAt(0)
      || searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      // 検索語の最初の１文字が一致する場合[hide]クラスを除去
      element.classList.remove('hide');
    } else {
      // 検索語の最初の１文字が一致しない場合、[hide]クラスを追加
      element.classList.add('hide');
    }
  });
});
