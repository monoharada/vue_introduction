const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
const milliSecond = date.getMilliseconds();
let meridiem;
let hour2;
if (hour < 12) {
  meridiem = 'AM';
  hour2 = hour;
} else {
  meridiem = 'PM';
  hour2 = hour - 12;
}
const dayList = ['日', '月', '火', '水', '木', '金', '土'];
const weekday = dayList[date.getDay()];
const label = `${month}月${day}日(${weekday})${hour}:${minutes}:${second}.${milliSecond}${meridiem}`;
const labelJp = date.toLocaleDateString();
const label_time = date.toLocaleTimeString();
