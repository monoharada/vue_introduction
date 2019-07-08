const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled1 = shuffledArray(array1);
print(shuffled1);

const array2 = ['鈴木', '田中', '吉田', '後藤', '辻'];
const shuffled2 = shuffledArray(array2);
print(shuffled2);

// 配列をシャッフルします。
// 元の配列は変更せず、新しい配列を返します。
// @param sourceArr 元の配列は変更せず
// @return シャッフルさせた配列

function shuffledArray(sourceArr) {
  // 元の配列の複製を作成

  const array = sourceArr.concat();
  // Fisher-yatesのアルゴリズム
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

const person = {
  id: 1,
  name: 'suzuki',
};

person.age = 23;

console.log(person);

const object1 = {
  result: true,
  members: [{ id: 1, name: 'suzuki' }, { id: 2, name: 'tanaka' }, { id: 3, name: 'takahasi' }],
};

const copyobject1 = Object.assign({}, object1);
const copyobject2 = { ...object1 };

console.log(copyobject1 === copyobject2);
