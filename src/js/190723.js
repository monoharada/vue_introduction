document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('コンテンツが表示されました');
    return;
  }

  if (document.visibilityState === 'hidden') {
    console.log('コンテンツがバックグラウンドになりました');
    alert('hidden');
  }
});

const widthLog = document.querySelector('#widthLog');
const heightLog = document.querySelector('#heightLog');

window.addEventListener('resize', () => {
  widthLog.innerText = `${window.innerWidth}px`;
  heightLog.innerText = `${window.innerHeight}px`;
});

let resizeTimer;

window.addEventListener('resize', () => {
  if (resizeTimer != null) {
    clearTimeout(resizeTimer);
  }
});

resizeTimer = setTimeout(() => {
  onResize();
}, 1000);

function onResize() {}

const rectAngle = document.querySelector('.rectangle');

const mediaQuelyList = matchMedia('(min-width:600px)');

mediaQuelyList.addListener(onMediaQueryChange);

function onMediaQueryChange(mediaQuaryList) {
  if (mediaQuaryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('ウィンドウサイズが600pxを超えました');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('ウィンドウサイズが600pxを下回りました');
  }
}

onMediaQueryChange(mediaQuelyList);
