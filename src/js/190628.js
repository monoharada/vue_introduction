const priceList = [100, 500, 900];

const sum = priceList.reduce((previous, current) => previous + current);

const array = [['バナナ', 'りんご', 'いちご'], ['みかん', 'ぶどう']];

const flattenedArray = array.reduce((previousValue, currentValue) => previousValue.concat(currentValue));

let a;
let b;
let c;

[a, b, c] = [1, 2, 3];
console.log(a, b, c);

const array02 = ['x', 'z'];
[array02[0], array02[1]] = [array02[1], array02[0]];
console.log(array02);
