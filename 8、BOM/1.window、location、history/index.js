/**
 * 1.理解 window 对象和全局作用域
 * 2.将 window 相对屏幕居中
 * 3.调整 window 大小为 1280 * 720 （长 * 高）
 * 4.新标签页打开一个百度网站，并在 5s 后关闭
 * 5.设置一个 3s 延时，时间到后打印 glj
 * 6.取消刚刚设置的延时
 * 7.设置一个轮询（间歇调用），第一次打印 1，第二次打印 2，每次增加 1，以此类推
 * 8.5s 后取消轮询
 */

console.log(window.screenTop, window.screenLeft, window.innerHeight, window.innerWidth, window.outerHeight, window.outerWidth);
const x = (1040 - Number(window.outerHeight)) / 2;
const y = (1920 - Number(window.outerWidth)) / 2
window.moveTo(x, y);
window.innerWidth = 1280;
window.innerHeight = 720;
const baidu = window.open('https://www.baidu.com/', 'baiDu');
setTimeout(function () {
  baidu.close()
}, 5000);


/**
 * 1.获取当前网页地址
 * 2.获取当前网页域名
 * 3.修改当前网页地址，在地址后面加上 '?glj=1&learn=2'
 * 4.获取当前网页查询字符串，并转换为 { glj: 1, learn: 2 } 的形式
 * 5.获取当前网页哈希（hash）
 */

console.log('地址', window.location.href, '域名', window.location.host);
location.hash = '?glj=1&learn=2';

function getQueryStringArgs() {
  const qs = location.search.length > 0 ? location.search.substring(1) : '';
  const args = {};
  let items = qs.length ? qs.split('&') : [];
  let item = null;
  let name = null;
  let value = null;
  let len = items.length;

  for (let i = 0; i < len; i++) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    args[i] = toString(name) + ': ' + toString(value);
  }
  return args;
}
console.log(getQueryStringArgs());
console.log(location.hash);

/**
 * 1.后退网页一次
 * 2.前进网页一次
 * 3.跳转到百度
 */

history.go(-1);
/** history.back() */
history.go(1);
/** history.forward() */
history.go('www.baidu.com');