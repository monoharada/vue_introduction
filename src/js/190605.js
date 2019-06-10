const myValue = '100';

// switch (myValue) {
//   case 100:
//     alert('100です');
//     break;
//   default:
//     console.log('数字の100ではありません');
//     break;
// }

// for (let index = 0; index < 10; index++) {
//   console.log(index, 'hoge');
// }

// let myNumber = 0;
// while (myNumber < 10) {
//   console.log('myNumber', myNumber);
//   myNumber += 1;
// }
// myFunction(true);
// console.log('終了');
myFunction2(true);
console.log('終了');
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    continue;
  }
  console.log(index);
}

function myFunction(flgA) {
  for (let index = 0; index < 10; index++) {
    if (flgA === true) {
      if (index % 2 !== 0) {
        console.log(index);
      }
    }
  }
}

function myFunction2(flgA) {
  for (let index = 0; index < 10; index++) {
    if (flgA === false) {
      continue;
    }
    if (index % 2 === 0) {
      continue;
    }
    console.log(index, '!');
  }
}
