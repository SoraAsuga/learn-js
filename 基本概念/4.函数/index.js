/**
 * 1.声明一个函数 say，拥有一个形参 what，函数的功能是输出 "say: what" （what 替换为 形参的具体值）
 * 2.声明一个函数 isNullable，拥有一个形参 unknown，函数的功能是判断 unknown 是否是 ''、null、undefined、NaN
 *    并返回 true 或 false
 * 3.定义变量 a，输出 isNullable('')、isNullable(+'a')、isNullable(a)、isNullable(a + '')、isNullable(null)、isNullable(undefined)、isNullable(typeof undefined)
 * 4.声明一个函数 parseNumber，有一个形参 unknown，函数的功能是将 unknown 转化为 Number 类型，且需要将 NaN 转化为 0
 *    返回转化后的值
 * 5.理解 p66 3.7.2
 */
function say(what) {
  console.log("say:", what);
}

function isNullable(unknown) {
  return unknown === '' || unknown === null || unknown === undefined || unknown === NaN;
}

function parseNumber(unknown) {
  const n = Number(unknown);
  /** NaN 不等于 NaN，因此要转化为字符串形式判断 */
  if (String(n) === 'NaN') {
    return 0;
  }
  return n;
  /** 简写
   * return n === NaN ? 0 : n;
   */
}

say("happen");
let a;
console.log(isNullable);
console.log(isNullable('')); /** true */
console.log(isNullable(+'a')); /** false */
console.log(isNullable(a)); /** true */
console.log(isNullable(a + '')); /** false */
console.log(isNullable(null));/** true */
console.log(isNullable(undefined)); /** true */
console.log(isNullable(typeof undefined)); /** false */
console.log(parseNumber(NaN));
console.log(parseNumber('NaN'));
console.log(parseNumber('1a'));
console.log(parseNumber('2333'));


/**
 * 1.声明一个函数 log，将形参 some 转换为字符串，并在前面加上 "[debug] "，最后输出到控制台
 *     例：log('glj 23333');
 *     打印：[debug] glj 23333
 * 2.声明一个函数 triangle，形参为一个正整数 n，先将 n 用 parseNumber 转换为数字，如果传入的 n 不符合条件，输出控制台提示 n 必须为正整数
 *    当 n 符合条件时，用符号 '*' 在控制台打印一个直角三角形
 *    例：triangle('a');
 *    打印： n 必须为正整数，但传入的 n 为 `a`
 * 
 *    例：triangle(1.5);
 *    打印： n 必须为正整数，但传入的 n 为 `1.5`
 * 
 *    例：triangle(3);
 *    打印：*
 *          * *
 *          * * *
 */
