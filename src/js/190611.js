const targetString = 'Javascriptを覚えよう';
const a1 = 'Javascript';
const b1 = '覚えよう';
const c1 = 'HTML';

document.querySelector('.result1').innerHTML = targetString.includes(a1);
document.querySelector('.result2').innerHTML = targetString.includes(b1);
document.querySelector('.result3').innerHTML = targetString.includes(b1, 12);
document.querySelector('.result4').innerHTML = targetString.includes(c1);
document.querySelector('.result5').innerHTML = targetString.startsWith(b1);
document.querySelector('.result6').innerHTML = targetString.endsWith(b1);
