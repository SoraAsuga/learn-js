/** 数据类型判断
 * 1.在控制台输出 10086 的数据类型
 * 2.在控制台输出 "glj" 的数据类型
 * 3.在控制台输出 false 的数据类型
 * 4.在控制台输出 null 的数据类型，并说明为什么
 * 5.在控制台输出变量 a 的数据类型，并说明为什么
 * 6.定义一个变量 b，在控制台输出变量 b 的数据类型，并说明为什么
 * 7.定义一个函数 c（函数表达式），在控制台输出 c 的数据类型
 */

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

/** String
 * 1.将“数据类型判断”中的 值 或者 变量 用多种方式（至少 2 种）转化为 string 类型，并用 typeof 输出转换后的类型
 *    如：console.log(typeof(10086))
 * 2.在一个 console.log 中换行输出：1、2、3
 * 3.将 hello 和 world 拼接在一起并输出
 * 4.将 4 转换为二进制
 */

/** Object
 * 1.用构造函数的方式声明一个对象并赋值给 o1
 */
function test1() {
  console.log("数据类型判断");
  console.log(typeof (10086));
  console.log(typeof ("glj"));
  console.log(typeof (false));
  console.log(typeof (null)); /** 因为null值表示一个 空对象 指针 */
  console.log(typeof (a)); /** 对未声明的变量使用typeof操作符会返回undefined */
  let b;
  console.log(typeof (b)); /** 在声明变量后未对其初始化则该变量的值为undefined */
  let c = function () {};
  console.log(typeof (c));

}

function test2() {
  console.log("Boolean:");
  console.log(Boolean(10086)); /** 任何非0数字转化为Boolean类型时值为true */
  console.log(Boolean("glj")); /** 任何非空字符串转化为Boolean类型时值为true */
  console.log(Boolean(false)); /** false为boolean类型 */
  console.log(Boolean(null)); /** null转化为boolean时为false */
  /** console.log(Boolean(a)); 报错,因为a未声明 */
  let b;
  console.log(Boolean(b)); /** b未赋值因此为undefined,undefined值转化为boolean时为false */
  let c = function () {};
  console.log(Boolean(c)); /** c为object对象，任何object对象转化为boolean值时为true */

  console.log("Number:");
  console.log(Number(10086)); /** 10086为number类型 */
  console.log(Number("glj")); /** 该字符串内容不为纯数字，不为小数，不为十六进制格式，不为空字符串，因此转化为number格式时为NaN */
  console.log(Number(false)); /** 转化对象为boolean值时分别转化true和false为1和0 */
  console.log(Number(null)); /** null转化为number类型时为0 */
  /** console.log(Number(a)); 报错,因为a未声明 */
  console.log(Number(b)); /** 转化值为undefined则返回NaN */
  console.log(Number(c)); /** 转化值为对象，先调用valueOf()方法返回转化值，如果返回值为NaN则调用toString()方法转化为字符串，此处转化为NaN */

  console.log("praseInt:")
  console.log(parseInt(10086)); /** 10086为number类型 */
  console.log(parseInt("glj")); /** 该方法在将对象转化为number类型时如果第一个非空格字符为非数字则返回NaN */
  console.log(parseInt(false)); /** 该方法在将对象转化为number类型时如果第一个非空格字符为非数字则返回NaN */
  console.log(parseInt(null)); /** 该方法在将对象转化为number类型时如果第一个非空格字符为非数字则返回NaN */
  /** console.log(parseInt(a)); 报错,因为a未声明 */
  console.log(parseInt(b)); /** 该方法在将对象转化为number类型时如果第一个非空格字符为非数字则返回NaN */
  console.log(parseInt(c)); /** 该方法在将对象转化为number类型时如果第一个非空格字符为非数字则返回NaN */

  console.log("对比")
  console.log(NaN == NaN); /** NaN与任何值都不相等，包括他自己 */
  console.log(Number("glj")); /** 该字符串内容不为纯数字，不为小数，不为十六进制格式，不为空字符串，因此转化为number格式时为NaN */
  console.log(isNaN("glj")); /** 任何不能转化为数值的参数都会被isNaN返回true */
  console.log(1 / 0); /** 该结果超出JS能显示的最大数字范围 */
  console.log(isFinite(1 / 0)); /** 该式的结果超出显示范围因此返回false */
  console.log(1 + true); /** +操作符的隐式类型转化将true转化为1后再进行相加 */
  console.log(1 + NaN); /** NaN加任何数都为NaN */
  console.log(1 + undefined); /** undefined加任何数字都为NaN，undefined加一个字符串则会将undefined转化为字符串后拼接 */
  console.log(1 + "2");
  console.log(typeof (1 + "2"));
  console.log(1 + "a");
  console.log(typeof (1 + "a")); /** 由于 + 操作符存在隐式转化，在数字与字符串相加时会将两者均转化为字符串后再拼接起来 */
}

function test3() {
  console.log("String1:")
  console.log(typeof (toString(10086)));
  console.log(typeof (toString("glj")));
  console.log(typeof (toString(false)));
  console.log(typeof (toString(null)));
  /** console.log(typeof(toString(a))); 因未声明a报错 */
  let b;
  console.log(typeof (toString(b)));
  let c = function () {};
  console.log(typeof (toString(c)));

  console.log("String2:")
  let a1 = 10086;
  console.log(typeof (a1.toString()));
  let a2 = "glj";
  console.log(typeof (a2.toString()));
  let a3 = false;
  console.log(typeof (a3.toString()));
  /** let a4 = null;
   * console.log(typeof(a4.toString()));
   * null上没有toString方法 */
  /** console.log(typeof(toString(a))); 因未声明a报错 */
  /** console.log(typeof (b.toString())); 
   * undefined上没有toString方法
   */
  console.log(typeof (c.toString()));

  let num1 = "1\n2\n3";
  console.log(num1);
  console.log("hello" + "world");
  let num2 = 10;
  console.log(num2.toString(2));

}

function test4() {
  console.log("Object:");
  let o1 = new Object();
}

test1();
test2();
test3();
test4();