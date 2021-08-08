'use strict';
/**
 * 1.定义变量 a 和 b，a = 1，给 b 赋值，值为 a，给 a 赋值，值为 2，问最后 a = ?，b = ?，为什么？
 * 2.定义变量 s1 和 s2，s1 = 'hello'，给 s2 赋值，值为 s1，说明 s1、s2 的类型；给 s1 赋值，值为 a，问最后 s1 = ?，s2 = ?，分别为什么类型，为什么？
 * 3.定义变量 o，初始值是空对象，用对象字面量赋值，设置 o.name = 'glj'；定义变量 o1，将 o 赋值给 o1，打印 o1
 *    设置 o1.name = 'sdl'，打印 o，说明打印结果的原因
 * 4.定义变量 f，初始值是空函数，设置 f.glj = 'roriconn'，打印 f.glj，说明为什么
 * 5.定义变量 x，初始值 233，设置 x.glj = '2333333'，打印 x.glj，说明为什么
 */
function test1() {
  console.log('test1');
  let a = 1;
  let b;
  console.log(a, b);

  b = a;
  console.log(a, b);

  a = 2;
  console.log(a, b);
  /** a 与 b 为基本类型类型，保存的为具体的值，因此 b = a 时将 a 当前的值赋给了 b 即使后面再改变 a 的值 b 也不会改变 */

  let s1, s2;
  console.log(s1, s2);
  s1 = 'hello';
  console.log(s1, s2);
  s2 = s1;
  console.log(s1, s2);
  s1 = a;
  console.log(s1, s2);
  /** a 与 b 为基本类型类型，保存的为具体的值，因此 b = a 时将 a 当前的值赋给了 b 即使后面再改变 a 的值 b 也不会改变 */

  const o = {};
  o.name = 'glj';
  let o1 = {};
  o1 = o;
  console.log(o1);
  o1.name = 'sdl';
  console.log(o);
  /** o 与 o1 为引用类型，o1 = o 使得 o 与 o1 的指针指向同一对象，因此改变 o1 的 name 属性 o 的 name 属性也随之更改 */

  const f = function () {};
  f.glj = 'roriconn';
  console.log(f.glj);
  /** f 为引用类型，因此可以通过 点式调用 的方法修改该对象的属性 */

  const x = 233;
  x.glj = '2333333';
  console.log(x.glj);
  /** x 为基础类型，因此没有 点式调用 方法 */
}
test1();

/**
 * 定义变量 a = 1, o1 = {}
 * 1.定义函数 f1，形参 num，函数内执行 console.log(++num)
 *    调用函数 f1(a)，并在函数外打印变量 a，比较两者结果，说明为什么
 * 2.定义函数 f2，形参 a，函数内执行 console.log(++a)
 *    调用函数 f2(a)，并在函数外打印变量 a，比较两者结果，说明为什么
 * 3.定义函数 f3，形参 o，函数内给 o 增加属性 glj，属性值设为 'nb'，打印 o
 *    调用函数 f3(o1)，并在函数外打印 o1，比较两者的值，并说明为什么
 * 4.定义函数 f4，形参 o，函数内给 o 重新赋值为 { gljnb: true }，打印 o
 *    调用函数 f4(o1)，并在函数外打印 o1，比较两者的值，并说明为什么
 */
function test2 () {
  console.log('test2');
  let a = 1;
  const o1 = {};
  function f1 (num) {
    console.log(++num);
  }
  f1(a);
  console.log(a);
  /** a 为基本类型，此处函数打印的为 a 自加后的值，但是因为该操作在函数内执行，改变的是形参 num 的值，因此直接打印 a 时 a 仍然为原值 */

  function f2 (a) {
    console.log(++a);
  }
  f2(a);
  console.log(a);
  /** a 为基本类型，此处函数打印的为 a 自加后的值，但是因为该操作在函数内执行，改变的是形参 a 的值，因此直接打印 a 时 a 仍然为原值  */

  function f3 (o) {
    o.glj = 'nb';
    console.log(o);
  }
  f3(o1);
  console.log(o1)
  /** o1 为引用类型，此处形参 o 指针与 o1 指向同一处，此处给 o1 增加了 glj 属性，因此调用函数打印与直接打印 o1 结果相同 */

  function f4 (o) {
    o = { gljnb: true };
    console.log(o);
  }
  f4(o1);
  console.log(o1);
  /** o1 为引用类型，此处形参 o 指针与 o1 指向同一处，但函数内改变了 o 的指针，因此调用函数与直接打印结果不同 */
}
test2();
