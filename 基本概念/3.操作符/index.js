/** 一元操作符
 * 1.定义变量 a、b，分别设置初始值 1
 * 2.输出 ++a + 1 的值
 * 3.输出 b++ + 1 的值
 * 
 * 4.定义变量 str，设置初始值 "a"
 * 5.定义变量 bool, 设置初始值 true
 * 6.输出 str++，输出 bool--
 * 
 * 7.定义变量 str2，设置初始值 "2"
 * 8.定义变量 bool2, 设置初始值 false
 * 9.输出 +str，+str2，输出 +bool，+bool2
 * 10.输出 -str，-str2，输出 -bool，-bool2
 */

/** 布尔操作符
 * 1.输出 !a，!str，!bool，并说明为什么
 * 2.输出 a && b，输出 a && bool2，并说明为什么
 * 3.输出 a || b，输出 bool2 || str，并说明为什么
 */

/** 相等操作符
 * 1.输出 a == b，输出 a === b，并说明为什么
 * 2.输出 a == str2，输出 a === str2，并说明为什么
 */

/** 条件操作符
 * 使用三目运算符进行以下代码编写：
 * 例：console.log(a === 2 ? 'a = 2' : 'a != 2'); √
 *     a === 2 ? console.log('a = 2') : console.log('a != 2'); × // 语法正确，写法不推荐
 * 
 * 1.当 a 和 b 相等时，输出 "a 等于 b"，否则输出 "a 不等于 b"
 * 2.当 a 和 str2 全等时，输出 "a 全等 str2"，否则输出 "a 不全等 str2"
 */

/** if 语句
 * 1.用 if 语句重写上面 “条件操作符的题目”
 * 2.a 和 str2 全等时，输出 "a === str2"，否则，a 和 b 全等时，输出 "a === b"，否则，输出 "a !== str2 且 a !== b"
 */

function test1() {
  console.log("一元操作符:");
  let a = 1;
  let b = 2;
  let str = "a";
  let str2 = "5";
  let bool = true;
  let bool2 = false;
  console.log(++a + 1); /** 3 */
  console.log(b++ + 1); /** 3 */
  console.log(str++); /** NaN, 后置递加在应用于一个不包含有效数字的字符串时将转为 NaN */
  console.log(bool--); /** 1 */
  console.log(+str, +str2); /** NaN, 5 */
  console.log(+bool, +bool2); /** 1, 0 */
  console.log(-str, -str2); /** NaN, -5 */
  console.log(-bool, -bool2); /** -1, -0 */

  console.log("布尔操作符:");
  console.log(!a); /** false, 非操作符操作数是非0数值返回 false */
  console.log(!str); /** false, 非操作符操作数是非空字符串返回 false */
  console.log(!bool); /** false, 非操作符操作数是 boolean 则直接取反  */
  console.log(a && b); /** 3，第一个操作值转化为 boolean 类型后值为 true，则返回第二个值 */
  console.log(a && bool2); /** false，第一个操作值转化为 boolean 类型后值为 true，则返回第二个值 */
  console.log(a || b); /** 2，第一个操作值转化为 boolean 类型后值为 true，则返回第一个值 */
  console.log(bool2 || str); /** "a", 第一个操作数结果为 false，返回第二个值 */

  console.log("相等操作符:");
  a = 5;
  b = 5;
  console.log(a == b); /** true, a 与 b 值相同 */
  console.log(a === b); /** true, a 与 b 数值，类型均相同 */
  console.log(a == str2); /** true, 强制类型转化后两者都为数值 */
  console.log(a === str2); /** false, 两操作值类型不相同 */

  console.log("条件操作符:");
  console.log(a == b ? 'a等于b' : 'a不等于b'); /** 'a等于b' */
  console.log(a === str2 ? 'a全等于str2' : 'a不全等于str2'); /** 'a不全等于str2' */

  console.log("if 语句:");
  /** "a === b" */
  if (a === str2) {
    console.log("a === str2");
  } else if (a === b) {
    console.log("a === b");
  } else {
    console.log("a !== str2 且 a !== b");
  };

}

/** while 语句
 * 1.定义变量 i，赋值 5
 * 2.定义 while 循环，每次循环 i 都变小 1（分别用 表达式 和 两种自减运算符 实现）
 * 3.每次循环输出 i 的值
 */
function test2() {
  console.log("while语句:");
  let i = 5;
  while (i > 0) {
    i -= 1;
    console.log(i);
  };

  let L = 5;
  while (L > 0) {
    L = --L;
    console.log(L);
  };
}

/** for 语句
 * 1.用 for 循环实现上面 while 的题目
 * 2.定义一个循环，定义一个变量 j，j 初始为 0，当 j 大于 10 时退出循环，打印每次循环 j 的值
 * 3.在 2 的基础上，每当 j 能被 3 整除时，跳过本次循环并且不打印 j 的值
 * 4.在 3 的基础上，当 j 能被 2 和 3 同时整除时，退出循环
 */
function test3() {
  console.log("for循环");
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }

  for (let j = 0; j <= 10; j++) {
    console.log(j);
  }

  for (let j = 1; j <= 10; j++) {
    /** 0与任何数相除都为0,因此从1开始 */
    if (j % 3 == 0 && j % 2 == 0) {
      break;
    } else if (j % 3 == 0) {
      continue;
    } else {
      console.log(j);
    }
  }
}

/** switch 语句
 * 1.定义一个循环：定义一个变量 k，初始为 0，当 k 大于 11 时退出循环
 *   当 k 等于 3 时，输出 "k = 3"
 *   当 k 等于 5 时，输出 "k = 5"
 *   当 k 等于 7 或 11 时，输出 "k = 7 或 11"
 * 
 * 2.定义一个循环：定义一个变量 l，初始为 0，当 l 大于 10 时退出循环
 *   当 k 能被 2 整除时，输出 "k 是 2 的公倍数" （k 需要替换为当前 k 的值）
 *   当 k 能被 3 整除时，输出 "k 是 2 的公倍数" （k 需要替换为当前 k 的值）
 *   当 k 能被 5 整除时，输出 "k 是 2 的公倍数" （k 需要替换为当前 k 的值）
 */
function test4() {
  console.log("switch:")
  for (let k = 0; k <= 11; k++) {
    console.log(k);
    switch (k) {
      case 3:
        console.log("k = 3");
        break;
      case 5:
        console.log("k = 5");
        break;
      case 7:
      case 11:
        console.log("k = 7或11");
        break;
    }
  }
}

function test5() {
  for (let n = 0; n <= 10; n++) {
    console.log(n);
    if (n % 2 === 0 && n !== 0) {
      console.log(n + "是2的公倍数");
    }

    if (n % 3 === 0 && n !== 0) {
      console.log(n + "是3的公倍数");
    }

    if (n % 5 === 0 && n !== 0) {
      console.log(n + "是5的公倍数");
    }
  }
}

test1();
test2();
test3();
test4();
test5();
