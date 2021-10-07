/** 关键字是什么？ 红宝书 p21 */
/** 浏览器控制台是什么？ 浏览器提供的调试工具 */
/** 调试工具有什么用？ 帮助你查看代码执行结果，排查故障 */
/** 如何在控制台输出代码执行结果？ 使用 console.log()
 * 如 console.log(1 + 1); 执行后会输出 2
 * 如 console.log("hello"); 执行后会输出 hello
 * 如 console.log("hello", 1); 执行后会输出 hello 1
 */

/** 赋值
   *  = 为赋值运算符，= 左边必须为变量，右边为 表达式 或 变量 或 具体的值
   */

/** 声明变量 */
function variable() {
  console.log('声明变量');

  /** 使用 var 关键字声明变量 a */
  var a;
  console.log('a =', a); // 输出结果：undefined

  /** 使用 var 关键字声明变量 b，并赋值初始值为 1 */
  var b = 1;
  console.log('b =', b); // 输出结果：1

  /** 重复声明变量 a，并赋值为 2 */
  var a = 2;
  console.log('a =', a); // 输出结果：2

  /** 对变量 a 进行赋值操作，赋值一个具体值 3 */
  a = 3;
  console.log('a =', a); // 输出结果：3

  /** 对变量 a 进行赋值操作，赋值一个变量 b */
  a = b;
  console.log('a =', a); // 输出结果：1，和上文声明的变量 b 的值一致

  /** 再次重新声明 a */
  var a;
  console.log('a =', a); // 输出结果：1，并不是 undefined，var 声明的变量会 “变量提升”（百度）

  /** 直接声明 c（不推荐），会让任何地方都可以访问 c */
  c = 3;
  console.log('c =', c);
}

/** 声明变量2 */
function variable2() {
  console.log('声明变量2');

  /** 在上一个步骤直接声明的 c，会让任何地方都可以访问 c */
  console.log('c =', c);

  /** 使用 let 关键字声明变量 a */
  let a;
  console.log('a =', a); // 输出结果：undefined

  /** 不能使用 let 关键字重复声明同一个变量 */
  // let a = 2;
  /** 报错：Uncaught SyntaxError: Identifier 'a' has already been declared */

  /** 对 a 赋值 */
  a = 3;
  console.log('a =', a); // 输出结果：3

  /** 使用 const 关键字声明变量 */
  /** const 用于声明不会改变的变量 */
  const b = 2;
  console.log('b =', b); // 输出结果：2

  /** 不可使用 const 重复声明同一个变量 */
  // const b = 4;
  /** 报错：Uncaught SyntaxError: Identifier 'a' has already been declared */

  /** 不可对 const 声明的变量重新赋值，如果需要重新赋值，应该使用 let 关键字声明变量 */
  b = 4; // vUncaught TypeError: Assignment to constant variable.
}

variable();
variable2();
