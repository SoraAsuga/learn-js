/**
 * 1.理解递归
 * 2.实现一个费波纳茨数列：第 n 项 = 第 n - 1 项 + 第 n - 2 项，第一项和第二项均为 1
 *    一个长度为 10 的费波纳茨数列：1 1 2 3 5 8 13 21 34 55
 * 3.用刚刚实现的函数输出长度为 10 的费波纳茨数列
 */

function fibonacci(num) {

  if (num === 1 || num === 2) {
    return 1
  };

  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(10));
