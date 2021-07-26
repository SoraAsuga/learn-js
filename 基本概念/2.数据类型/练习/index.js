/** 数据类型判断
 * 1.在控制台输出 10086 的数据类型
 * 2.在控制台输出 "glj" 的数据类型
 * 3.在控制台输出 "123glj" 的数据类型
 * 4.在控制台输出 false 的数据类型
 * 5.在控制台输出 null 的数据类型，并说明为什么
 * 6.在控制台输出变量 a 的数据类型，并说明为什么
 * 7.定义一个变量 b，在控制台输出变量 b 的数据类型，并说明为什么
 * 8.定义一个函数 c（函数表达式），在控制台输出 c 的数据类型
 */
function test1() {
  console.log("数据类型判断");
  console.log('typeof 10086', typeof 10086); /** number */
  console.log(typeof "glj"); /** string */
  console.log(typeof "123glj"); /** string */
  console.log(typeof false); /** boolean */
  console.log(typeof null); /** 因为 null 值表示一个 空对象 指针 */
  console.log(typeof a); /** 对未声明的变量使用 typeof 操作符会返回 undefined */
  let b;
  console.log(typeof b); /** 在声明变量后未对其初始化则该变量的值为undefined */
  let c = function () { };
  console.log(typeof c); /** function */
}

/** Boolean、Number
 * 1.将“数据类型判断”中的 值 或者 变量 分别转化为 布尔 类型并说明为什么
 * 2.将“数据类型判断”中的 值 或者 变量 分别转化为 Number 类型(使用两种方法)并说明为什么
 * 3.在控制台输出表达式 NaN == NaN 的结果，并说明为什么
 * 4.在控制台输出 Number("glj") 并说明为什么
 * 5.在控制台输出 isNaN("glj")，并说明为什么
 * 6.在控制台输出表达式 1 / 0 的结果，并输出 isFinite(1 / 0) 的结果
 * 7.在控制台输出 1 + true 的结果，并说明为什么
 * 8.在控制台输出 1 + NaN 的结果，并说明为什么
 * 9.在控制台输出 1 + undefined 的结果，并说明为什么
 * 10.在控制台输出 1 + "2" 的结果，并说明为什么
 * 11.在控制台输出 1 + "a" 的结果，并说明为什么
 */
function test2() {
  console.log("Boolean:");
  console.log(Boolean(10086)); /** true, 任何非 0 数字转化为 Boolean 类型时值为 true */
  console.log(Boolean("glj")); /** true, 任何非空字符串转化为 Boolean 类型时值为 true */
  console.log(Boolean("123glj")); /** true, 任何非空字符串转化为 Boolean 类型时值为 true */
  console.log(Boolean(false)); /** false, 为 boolean 类型 */
  console.log(Boolean(null)); /** false, null 转化为 boolean 时为 false */
  /** console.log(Boolean(a)); 报错, 因为 a 未声明 */
  let b;
  console.log(Boolean(b)); /** false, b 未赋值因此为 undefined, undefined 值转化为 boolean 时为 false */
  let c = function () { };
  console.log(Boolean(c)); /** true, function 转化为 boolean 值时为 true */

  console.log("Number:");
  console.log(Number(10086)); /** 10086, 10086 为 number 类型 */
  console.log(Number("glj")); /** NaN，该字符串内容不为纯数字，不为小数，不为十六进制格式，不为空字符串，因此转化为 number 格式时为 NaN */
  console.log(Number("123glj")); /** NaN, 该字符串内容不为纯数字，不为小数，不为十六进制格式，不为空字符串，因此转化为 number 格式时为 NaN */
  console.log(Number(false)); /** 0, 转化该值为 boolean 值时分别转化 true 和 false 为 1 和 0 */
  console.log(Number(null)); /** 0, null 转化为 number 类型时为 0 */
  /** console.log(Number(a)); 报错,因为 a 未声明 */
  console.log(Number(b)); /** NaN, 转化值为 undefined 则返回 NaN */
  console.log(Number(c)); /** NaN, 转化值为 function，先调用 valueOf() 方法返回转化值，如果返回值为 NaN 则调用 toString() 方法转化为字符串，此处转化为 NaN */

  console.log("praseInt:")
  console.log(parseInt(10086)); /** 10086, 10086 为 number 类型 */
  console.log(parseInt("glj")); /** NaN, 该方法在将该值转化为 number 类型时如果第一个非空格字符为非数字则返回 NaN */
  console.log(parseInt("123glj")); /** 123, 转换该值字符串第一个为数字，因此将字符串中该串数字抽出并转为 Number */
  console.log(parseInt(false)); /** NaN, 该方法在将该值转化为 number 类型时如果第一个非空格字符为非数字则返回 NaN */
  console.log(parseInt(null)); /** NaN, 该方法在将该值转化为 number 类型时如果第一个非空格字符为非数字则返回 NaN */
  /** console.log(parseInt(a)); 报错, 因为 a 未声明 */
  console.log(parseInt(b)); /** NaN, 该方法在将该值转化为 number 类型时如果第一个非空格字符为非数字则返回 NaN */
  console.log(parseInt(c)); /** NaN, 该方法在将该值转化为 number 类型时如果第一个非空格字符为非数字则返回 NaN */

  console.log("对比")
  console.log(NaN == NaN); /** false, NaN 与任何值都不相等，包括他自己 */
  console.log(Number("glj")); /** NaN, 该字符串内容不为纯数字，不为小数，不为十六进制格式，不为空字符串，因此转化为 number 格式时为 NaN */
  console.log(isNaN("glj")); /** true, 任何不能转化为数值的参数都会被 isNaN 返回 true */
  console.log(1 / 0); /** Infinity, 该结果超出 JS 能显示的最大数字范围 */
  console.log(isFinite(1 / 0)); /** false, 该式的结果超出显示范围因此返回 false */
  console.log(1 + true); /** 2, + 操作符的隐式类型转化将 true 转化为 1 后再进行相加 */
  console.log(1 + NaN); /** NaN, NaN 加任何数都为 NaN */
  console.log(1 + undefined); /** NaN, undefined 加任何数字都为 NaN，undefined 加一个字符串则会将 undefined 转化为字符串后拼接 */
  console.log(1 + "2"); /** "12" */
  console.log(typeof (1 + "2")); /** string */
  console.log(1 + "a"); /** "1a" */
  console.log(typeof (1 + "a")); /** string, 由于 + 操作符存在隐式转化，在数字与字符串相加时会将两者均转化为字符串后再拼接起来 */
}

/** String
 * 1.将“数据类型判断”中的 值 或者 变量 用多种方式（至少 2 种）转化为 string 类型并输出
 * 2.在一个 console.log 中换行输出：1、2、3
 * 3.将 hello 和 world 拼接在一起并输出
 * 4.将 4 转换为二进制
 */
function test3() {
  console.log("String1:")
  console.log(String(10086)); /** "10086" */
  console.log(String("glj")); /** "glj" */
  console.log(String(false)); /** "false" */
  console.log(String(null)); /** "null",  */
  /** console.log(String(a)); 因未声明a报错 */
  let b;
  console.log(String(b)); /** "undefined" */
  let c = function () { };
  console.log(String(c)); /** "function () { }" */

  console.log("String2:")
  let a1 = 10086;
  console.log(a1.toString()); /** "10086" */
  let a2 = "glj";
  console.log(a2.toString());
  let a3 = false;
  console.log(a3.toString());
  /** let a4 = null;
   * console.log(a4.toString());
   * null上没有toString方法 */
  /** console.log(toString(a)); 因未声明a报错 */
  /** console.log(b.toString()); 
   * undefined上没有toString方法
   */
  console.log(c.toString()); /** "function () { }" */

  console.log("1\n2\n3");
  console.log("hello" + " world");
  console.log("hello", "world");
  let num2 = 4;
  console.log(num2.toString(2)); /** 将值转化为二进制字符串，toString 的第一个实参表示转化的进制 */
}

/** Object
 * 1.用构造函数的方式声明一个该值并赋值给 o1
 */
function test4() {
  console.log("Object:");
  let o1 = new Object();
  let o2 = {
    
  };
}

test1();
test2();
test3();
test4();
