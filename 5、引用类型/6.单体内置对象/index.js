/**
 * 1.使用 encodeURIComponent 编码 https://www.baidu.com?s=glj
 * 2.解码刚刚编码的字符串
 */

 const uri = "https://www.baidu.com?s=glj";
 const uri1 = encodeURIComponent(uri);
 console.log(uri1);
 console.log(decodeURIComponent(uri1));


/** Math
 * 1.打印圆周率
 * 2.计算 1, -1, 10 的最大值和最小值
 * 3.实现一个函数，传入一个参数，返回其整数部分，当其小于 0 时返回 0（不允许使用 if else，使用 Math 内置函数实现）
 * 4.获取一个 1 - 10 的随机数
 */

 console.log(Math.PI);
 console.log(Math.max(1, -1, 10));
 console.log(Math.min(1, -1, 10));
 function toInt (num) {
   return num === 0 ? 0 : Math.floor(num);
 }
console.log(toInt(123.312));
const num = Math.floor(Math.random() * 10 + 1);
console.log(num);