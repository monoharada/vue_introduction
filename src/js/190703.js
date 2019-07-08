import { objectExpression } from 'babel-types';

const userData = {
  id: 1,
  name: 'tanaka',
  age: 26,
};

// console.log(userData.hasOwnProperty('id'));
// console.log(userData.hasOwnProperty('adress'));
// console.log('id' in userData);

// console.log(userData.id != null);
// console.log(userData.address != null);

// console.log(Object.keys(userData));
// console.log(Object.values(userData));
// console.log(Object.values(userData));
// console.log(Object.entries(userData)[0]);

const { id, name, age } = userData;
const { name: myname } = userData;
Object.freeze(userData);
console.log(myname);
console.log(id);
console.log(name);
console.log(age);

function showCurrentData(argument) {
  if (argument instanceof Date) {
    console.log(`現在は${argument.toLocaleDateString()}です`);
  } else {
    console.log('不正なデータです');
  }
}
const today = new Date();
const myArray = [1, 2, 3];

showCurrentData(today);
showCurrentData(myArray);
