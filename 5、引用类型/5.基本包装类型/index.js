/**
 * 1.哪些基础类型有基本包装类型，并理解基本包装类型的作用
 * 2.将 3.1415 四舍五入保留两位小数
 * 3.将 7 转化为 2 进制
 */

/** 有基本包装类型的包括 Boolean, Number, String 类型 */
console.log('第一题');
let pi = new Number(Math.PI);
let pi2 = pi.toFixed(2);
console.log(pi2);

let num = new Number(7);
console.log(num.toString(2));


/**
 * 1.定义变量 str = '123456'
 * 2.两种方式获取 str 的第 3 个字符
 * 3.颠倒 str
 * 4.获取 str 的第 1 到第 3 个（含）字符为新字符串
 * 5.获取 str 的最后 2 个字符
 * 6.获取 str 的第 2 到 倒数第二（含） 的字符 
 * 7.定义变量 s = ' 123 '
 * 8.删除 s 的前缀空格（trimStart），删除 s 的后缀空格（trimEnd），删除 s 的前后空格
 */
console.log('第二题');
const str1 = '123456';
console.log('charAt:', str1.charAt(2), '[]:', str1[2]);

let str2 = '';
for (let i = 0; i < str1.length; i++) {
  str2 = str1[i] + str2;
}
console.log(str2);

const str3 = str1.slice(0, 3);
console.log(str3);

const str4 = str1.slice(-2);
console.log(str4);

const str5 = str1.slice(1, -1);
console.log(str5);

let s = ' 123 ';
console.log(s.trimStart(), s.trimEnd());
const s2 = s.trim();
console.log(s2);

/**
 * 1.定义变量 str = 'gLJ'，sentence = 'this is a cat, this is a hat'
 * 2.将 str 全字大写
 * 3.将 str 全字小写
 * 4.使用 match 匹配 sentence 里所有以 at 结尾的单词并打印
 * 5.将 ' hello world' 的所有空格替换为 _
 * 6.将 sentence 中的 cat、hat 替换为用 [] 包起来：'this is a [cat], this is a [hat]'
 * 7.将字符串的首字母大写，如 'hello world' => 'Hello world'（参考 p128）
 * 8.将 str 转为字符数组
 * 9.将 sentence 按照单词转为数组
 * 10.将转为数组的 sentence 用空格拼接为字符串
 */

console.log('第三题')
let str = 'gLJ';
let sentence = 'this is a cat, this is a hat';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const pattern = /(\b\w*at\b)/g;
console.log(sentence.match(pattern));
// const pattern2 = / /g;
console.log(' hello world'.replaceAll(' ', '_'));
console.log(sentence.replace(pattern, '[$1]'));

let hel = 'hello world';
hel.to
hel.toLowerCase();
let hel1 = hel.charAt(0).toUpperCase() + hel.slice(1);
console.log(hel1);

let strArray = str.split('');
console.log(strArray);

const pattern3 = /\b(\w+)\b/g;
const sent = sentence.match(pattern3);
console.log(sent);
const sent2 = sent.join(' ');
console.log(sent2);
