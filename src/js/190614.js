// ハッシュを格納するためのオブジェクト
const hashes = {};

// urlの?hoge=fuga...部分を配列として取得する
const parameters = location.search.split(/&|\?/).filter(value => value.includes('='));

// hashes[key]=valueの形でオブジェクトに格納する
parameters.forEach((parameter) => {
  // hoge=fugaを['hoge','fuga']の配列にする
  const parameterList = parameter.split('=');
  const key = parameterList[0];
  // valueはデコードしておく
  const value = decodeURIComponent(parameterList[1]);

  hashes[key] = value;
});
// 取得したパラメーターを反映

// hashesにidが含まれていればそれを反映
if (hashes.id != null) {
  document.querySelector('.id').innerHTML = hashes.id;
}
if (hashes.name != null) {
  document.querySelector('.name').innerHTML = hashes.name;
}
if (hashes.age != null) {
  document.querySelector('.age').innerHTML = hashes.age;
}
