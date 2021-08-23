/** p499
 * 1.抛出一个错误 glj
 * 2.错误处理刚刚抛出的错误
 * 3.错误处理：获取对象 o 的 glj 属性
 */
try {
  throw new GljError('发生错误，建议把电脑砸了！');
} catch (error) {
  console.log('已经砸了');
}

try {
  console.log(o.glj);
} catch (error) {
  console.log('不存在对象 o ！')
}