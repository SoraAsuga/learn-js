/**
 * 
 * 2.理解 new 操作符
 * 3.理解惰性载入函数与函数柯里化的区别
 * 4.理解 bind 函数和函数柯里化的相同和区别
 * 
 * 
 * 
 * 8.监听 input 内容改变，打印输入内容，思考用防抖还是节流
 * 9.实时监听页面滚动事件，输出 scrollTop，思考用防抖还是节流
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
const processor = {
  timeoutId: null,

  performProcessing: function () {
    console.log('这是节流');
  },

  process: function () {
    clearTimeout(this.timeoutId);

    const that = this;
    this.timeoutId = setTimeout(function () {
      that.performProcessing();
    }, 100);
  }
}

processor.process();

function throttle (method, context) {
  // 清除之前设置的任何定时器
  clearTimeout(method.tId);
  // 创建一个新的定时器
  method.tId = setTimeout(function () {
    method.call(context);
  }, 100);
}
// 同为函数节流，第一个参数为要执行的函数，第二个参数为作用域（默认window）