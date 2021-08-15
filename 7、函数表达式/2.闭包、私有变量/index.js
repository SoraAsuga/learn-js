/**
 * 1.理解图 7-1
 * 2.参考 p181 利用闭包和循环生成一个数组，数组的每一项都是一个函数，该函数执行结果返回数组下标对应的字符串
 *    arr[0]() 返回 '0'，arr[1]() 返回 '1'
 * 3.结合前面章节 4.3 垃圾回收理解内存泄漏
 * 4.结合闭包创建一个构造函数 Glj，拥有一个 私有变量 secret，拥有一个函数 seeSecret，函数返回 secret 的值
 *    实例化一个 Glj，尝试调用 secret 属性，再调用 seeSecret，理解其中作用
 * 5.理解单例模式，并结合闭包创建一个函数 getGlj，有一个私有变量 glj，当 glj 未定义时实例化一个 Glj 并赋值给 glj，
 *    当 glj 已经定义时返回 glj
 */

function createArray(num) {

  const result = new Array();

  for (var i = 0; i <= num; i++) {

    result[i] = function (num1) {
      return function () {
        return num1;
      }
    }(i);
  }

  return result;
}
const arr = createArray(10);
console.log(arr[0]());

function Glj() {
  this.secret = 'glj is lolikon';
  this.seeSecret = function () {
    const that = this;
    return function () {
      return that.secret;
    };
  }
}
const glj = new Glj();
console.log(glj.seeSecret()());