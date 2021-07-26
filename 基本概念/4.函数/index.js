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
  let i = what;
  console.log("say:" + i);
}

function isNullable(unknown) {
  switch (unknown) {
    case '':
    case null:
    case undefined:
    case NaN:
      console.log(true);
      return true;
    default:
      console.log(false);
      return false;
  }
}

function parseNumber(unknown) {
  if (unknown + '' == 'NaN') {
    return 0;
  } else {
    return Number(unknown);
  }
}

say("happen");
let a;
isNullable(''); /** true */
isNullable(+'a'); /** false */
isNullable(a); /** true */
isNullable(a + ''); /** false */
isNullable(null);/** true */
isNullable(undefined); /** true */
isNullable(typeof undefined); /** false */
console.log(parseNumber(NaN));