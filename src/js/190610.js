const targetString = 'Javascriptを覚えよう';

document.querySelector('.result1').innerHTML = targetString.indexOf('Javascript');
document.querySelector('.result2').innerHTML = targetString.indexOf('覚えよう');
document.querySelector('.result3').innerHTML = targetString.indexOf('Javascript', 5);
document.querySelector('.result4').innerHTML = targetString.indexOf('HTML');
document.querySelector('.result5').innerHTML = targetString.indexOf('a');
document.querySelector('.result6').innerHTML = targetString.lastIndexOf('a');
