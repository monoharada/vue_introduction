const weathreInformation = document.querySelector('#weather-information');

console.log(weathreInformation.outerHTML);
weathreInformation.outerHTML = '<img src="dummy" alt="gazou">';
const weaterElement = document.querySelector('#weather');

setTimeout(() => {
  weaterElement.innerHTML = '気温は<strong>-3℃</strong>の予想です。';
}, 3000);

const anchorElement = document.querySelector('#anchor');
console.log(anchorElement.getAttribute('href'));

const imageElement = document.querySelector('#image');

imageElement.setAttribute('src', 'https://placehold.jp/500x500.png');
