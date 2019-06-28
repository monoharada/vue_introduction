document.querySelector('#tweetButton').addEventListener('click', () => {
  // ツイート内容を取得
  let tweetText = document.querySelector('#tweetTextArea').value;

  // 半角スペースと #javascriptをツイート文言に追加する
  tweetText += ' #javascript';

  // エンコードする
  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `http://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
