/**
 * 
 * 2.理解 new 操作符
 * 3.理解惰性载入函数与函数柯里化的区别
 * 4.理解 bind 函数和函数柯里化的相同和区别
 * 
 * 
 * 
 * 
 * 
 **/
// 1.理解安全的类型检测 p597 该例子检测对象是否为 Array
function isArray (value) {
  return Object.prototype.toString.call(value) == '[object Array]';
}

// 5.实现一个 bind 函数
function bind (fn, context) {
  return function () {
    return fn.apply(context, arguments);
  };
}

// 6.理解 p609 
// 7.实现一个函数节流和函数防抖
// 函数防抖 短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
// 非立即执行版
function debounce(func, wait) {
  let timer;
  return function() {
    let args = arguments; // arguments中存着e
       
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args)
    }, wait)
  }
}

// 函数节流　指连续触发事件但是在 n 秒中只执行一次函数。，第一个参数为要执行的函数，第二个参数为作用域（默认window）
function throttle(func, wait) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

// 8.监听 input 内容改变，打印输入内容，思考用防抖还是节流

const input = document.querySelector('input');
input.addEventListener('input', debounce((event) => console.log(input.value), 1000));

// 9.实时监听页面滚动事件，输出 scrollTop，思考用防抖还是节流
function printScroll() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  console.log("距离顶端" + scrollTop);
}
document.addEventListener('scroll', throttle(printScroll, 500));