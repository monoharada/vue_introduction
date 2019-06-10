// 税込みの値段を返す関数
// @param price 価格
// @param tax　税率

function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

const result1 = calcFunction(8000);
console.log(result1);

const result2 = calcFunction(8000, 0.1);
console.log(result2);

// 引数の合計値を返す関数
// @param price
// @returns {number}

function calcSum(...price) {
  let result = 0;
  for (const value of price) {
    result += value;
  }
  return result;
}

const result3 = calcSum(10, 20);
console.log(result3);
const result4 = calcSum(5, 10, 20, 40);
console.log(result4);

const myPrice = 1;

if (myPrice >= 50) {
  alert('mypriceは５０以上です');
} else if (myPrice >= 10) {
  alert('priceは１０以上５０未満です');
} else {
  alert('mypriceは１０未満です');
}
if (true) {
  alert('hello');
}

const randumNum = Math.random() * 10;

if (randumNum >= 5) {
  alert('randumNumは５以上');
} else {
  alert('randumNumは５未満');
}
