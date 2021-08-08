/** Date
 * 默认为本地时区
 * 1.输出当前时间
 * 2.输出 2021 年 10 月 8 日 0 时 的时间
 * 3.输出当前时间戳
 * 4.获得当前时间的
 *    完整的年（如2000）、月份（如 8）、日期（如 12）、时（如 23）、分（如 10）、秒（如 8）
 * 5.练习包装类方法 String.padStart(length, fillString)
 *    例：'1'.padStart(2) // ' 1'
 *        '1'.padStart(2, '0'); // '01'
 * 6.封装一个函数 getFormattedDate，获取当前时间，并按照 YYYY-MM-DD HH:mm:ss （如 2000-01-06 09:00:00）格式输出
 * 7.执行 getFormattedDate, 并计算函数执行时间（参考 p100）
 **/
console.log(new Date());
console.log(new Date(Date.UTC(2021, 9, 8, 0)));
console.log(new Date().getTime());
console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString());
console.log('123'.padStart(6, '0'));
function getFormattedDate() {
  const start = +new Date();
  const now = new Date();
  const mon = (now.getMonth() + 1) + '';
  const day = (now.getDay() + 1) + '';
  const hours = now.getHours() + '';
  const min = now.getMinutes() + '';
  const sec = now.getSeconds() + '';
  console.log(now.getFullYear() + '-' + mon.padStart(2, '0') + '-' + day.padStart(2, '0'), hours.padStart(2, '0') + ':' + min.padStart(2, '0') + ':' + sec.padStart(2, '0'));
  const stop = +new Date();
  console.log(stop - start);
}
getFormattedDate();


/** RegExp
 * 元字符
 *    \d: 匹配 0 - 9 任一数字字符，例 /\d/: '1' 匹配，'2' 匹配
 *    \D: 匹配非数字字符
 *    \w: 匹配任一英文字符（包括英文下划线），例 /\w/: '1' 不匹配，'_' 匹配，'a' 匹配
 *    \W: 匹配任一非英文字符（且不匹配英文下划线）
 *    ^: 开头标记，字符串必须匹配开头，例 /^1/: '1' 匹配，'01' 不匹配
 *    $: 结尾标记，字符串必须匹配结尾，例 /233$/: '1233' 匹配，'23333' 不匹配
 *    |: 或，例 /123|234/: '123' 匹配，'234' 匹配
 *    .: 表示任意一个字符，例 /233./: '2333' 匹配，'233a' 匹配，'2343' 不匹配
 *    *: 表示前面一个字符出现任意次数，例 /233*3/: '23' 不匹配，'233' 匹配，'233333' 匹配
 *    +: 表示前面一个字符出现一次或多次，例 /233+/: '23' 不匹配，'233' 匹配，'2333' 匹配
 *    ?: 表示前面一个字符出现 0 次或 1 次，例 /lucky?/: 'luck' 匹配，'lucky' 匹配
 *    {}: 表示前面一个字符出现次数
 *          {2}: 出现 2 次
 *          {2,3}: 出现 2 - 3 次
 *          {2,}: 出现 2 - 无限次
 *        例：/a{4}/: 'aaaa' 匹配，'aaa' 不匹配
 *            /ab{2,3}c/: 'abc' 不匹配，'abbbc' 匹配，'abbbbc' 不匹配 
 *    []: 表示匹配任意[]内部的字符，例 /[hc]at/: 'hat' 匹配，'cat' 匹配，'bat' 不匹配
 *    (): 表示一个字符组，可以结合 . * + ? {} | 等
 *        例：/learn(ed)?/: 'learn' 匹配，'learned' 匹配
 *        例：/(j|t)sx/: 'jsx' 匹配，'tsx' 匹配
 *        例：/(glj)+233/: 'gljgljglj233' 匹配
 *        例：/^(\d-){6}$/: '1-2-3-4-5-6-' 匹配，'1-2-3-4-5-6' 不匹配
 * 
 * 1.定义变量 qq = '123456789', title = 'hello world'
 * 2.编写正则：匹配以 1 开头的字符串并验证
 *    验证示例: /^123/.test('123'); // true
 *              /^123/.test(' 123'); // false
 *    验证用例：qq、title
 *    用例答案：true false
 * 3.编写正则：不区分大小写匹配包含 'at' 的字符串并验证
 *    验证用例：'hat'、'attention'、'chat'、'active'
 *    用例答案：true    true        true    false
 * 4.编写正则：匹配所有 nd 或 ed 结尾的字符串并验证
 *    验证用例：'third'、'upped'、'end'、'second'、'edge'、'ed'
 *    用例答案：false     true    true    true     false    true
 * 5.编写正则：匹配所有 nd 或 ed 结尾的单词并验证
 *    验证用例：'third'、'upped'、'end'、'second'、'edge'、'ed'
 *    用例答案：false     true    true    true      false   false
 * 6.编写正则：匹配变量 qq，用构造函数方式，将 qq 作为变量动态生成正则表达式
 * 7.编写正则：匹配日期，包括以下几种日期格式：2000-01-22、2000/01/22
 *    验证用例：'2021-2-12'、'2021-02-12'、'2021-13-12'、'2021-12-00'、'2021/9/20'、'2021/11/11'、'20211/11/11'、'2021/13/01'、'0/0/0'
 *    用例答案：false         true          false         false         false         true          false         false         false
 */
console.log('RegExp');
const qq = '123456789';
const title = 'hello world';
const pattren1 = /^1/;
console.log('qq:', pattren1.test(qq), 'title:', pattren1.test(title));
const pattren2 = /at/i;
console.log('hat:', pattren2.test('hat'), 'attention:', pattren2.test('attention'), 'chat:', pattren2.test('chat'), 'active:', pattren2.test('active'));
const pattren3 = /^nd|^ed/;
console.log('third:', pattren3.test('third'), 'upped:', pattren3.test('upped'), 'end:', pattren3.test('end'), 'second:', pattren3.test('second'), 'edge:', pattren3.test('edge'), 'ed:', pattren3.test('ed'));
const pattren5 = new RegExp(qq);
console.log('qq:', pattren5.test(qq));
const pattren6 = /^(0[0-9][0-9][1-9]-|[1-9][0-9][0-9][0-9]-)(0[1-9]-|1[0-2]-)(0[1-9]|(1|2)[0-9]|3[0|1])*|^(0[0-9][0-9][1-9][/]|[1-9][0-9][0-9][0-9][/])(0[1-9][/]|1[0-2][/])(0[1-9]|(1|2)[0-9]|3[0|1])*/;
console.log('2021-2-12', pattren6.test('2021-2-12'));
console.log('2021-02-12', pattren6.test('2021-02-12'));
console.log('2021-13-12', pattren6.test('2021-13-12'));
console.log('2021-12-00', pattren6.test('2021-12-00'));
console.log('2021/9/20', pattren6.test('2021/9/20'));
console.log('2021/11/11', pattren6.test('2021/11/11'));
console.log('20211/11/11', pattren6.test('20211/11/11'));
console.log('2021/13/01', pattren6.test('2021/13/01'));
console.log('0/0/0', pattren6.test('0/0/0'));
