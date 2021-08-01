/**
 * 1.理解 p73 概念
 * 2.定义全局变量 a = 0
 * 3.定义函数 f1，在函数内定义变量 a = 1 并打印 a，执行函数
 * 4.定义函数 f2，在函数内定义变量 a = 2 并打印 a，执行函数
 * 5.打印 a，并说明为什么
 */

let a = 0;
function f1() {
  a = 1
  console.log(a);
}
f1();

function f2 () {
  a = 2;
  console.log(a);
}
f2();
console.log(a);
/** a 为全局变量，所有函数都可操作它 */

/**
 * 理解 p74 图 4-3
 * 定义全局变量 b = 2
 * 1.定义函数 f3，在函数内打印 a，并说明为什么
 * 2.定义函数 f4，在函数内修改 a = 1，执行函数，在函数外打印 a，说明为什么
 * 3.定义函数 f5，在函数内定义变量 b = 3，执行函数，在函数外打印 b，并说明为什么
 * 4.定义函数 f6，在函数内定义变量 b = 4，在函数内定义函数 f1
 *    在 f1 内执行 b = 5，定义变量 c = 1，在 f1 内打印 a, b, c
 *    在 f6 内打印 a, b, c，然后在 f6 内执行 f1，然后在 f6 内打印 a, b, c
 *    说明打印结果的原理
 * 5.定义函数 fx，在函数内声明变量 age = 22，在函数内声明函数 printAge，在 printAge 内打印 age
 *    定义函数 fx 的返回值为 printAge
 *    在 fx 外面打印 age
 *    将 fx 执行结果赋值给变量 printAge
 *    执行 printAge() 并说明为什么
 */

let b = 2;
function f3 () {
  console.log(a);
}
f3();
/** a 为全局变量，所有函数都可操作它 */

function f4 () {
  a = 1;
}
f4();
console.log(a);
/** a 为全局变量，所有函数都可操作它 */

function f5 () {
  b = 3;
}
f5();
console.log(b);
/** b 为全局变量，所有函数都可操作它 */

function f6 () {
  b = 4;
  function f1 () {
    b = 5;
    let c = 1;
    console.log(a, b, c); /**  */
  }
  console.log(a, b); /** 加入C导致报错 */
  f1();
  console.log(a, b); /** 加入C导致报错 */
}
f6();
/** 此处 a b 为全局变量，所有函数都可以操作他们，但是c为只存在于 f1 作用域内的局部变量，f1 执行完毕后即销毁，因此在外部 c 相当于从未被声明，因此报错 */

function fx () {
  let age = 22;
  function printAge () {
    console.log(age);
  }
  return printAge;
}
// console.log(age);
printAge = fx();
console.log(printAge);
printAge();
/** 此处age为局部变量，因此在外部无法调用 */

/**
 * 1.定义函数 ff1，在函数内执行 for 循环，循环 5 次，用 i 做循环变量
 *    在 for 循环内用 var 和 let 分别定义变量 x 和 y，将 i 分别赋值给 x, y
 *    在循环外打印 i, x, y 并说明为什么
 * 2.理解 p81 4.3.4
 * 3.根据 2，回过头去看函数 fx 和 printAge，说明存在的问题
 */

function ff1 () {
  for (let i = 0; i > 5; i++) {
    var x = i;
    let y = 1;
  }
  // console.log(i);
  console.log(x);
  // console.log(y);
}
ff1();
/** i x 为在该循环内声明的局部变量，因此在外部无法调用，因此报错，但是使用 var 声明的变量无论在何处声明都为为全局变量，只是赋予变量的值只在该作用域内有效 */