/**
 * 定义变量 n = 1, s = 'glj', o = {}, a = [1, 2]
 * 1.执行 typeof n 和 n instanceof Number，并说明出现结果的原因
 * 2.执行 typeof s 和 s instanceof String，并说明出现结果的原因
 * 3.执行 typeof null 和 null instanceof Object，并说明出现结果的原因
 * 4.执行 typeof o 和 o instanceof Object，并说明出现结果的原因
 * 5.执行 typeof a 和 a instanceof Object，并说明出现结果的原因
 * 6.理解 instanceof 的意义 p72
 */

function test1() {
  let n = 1;
  let s = 'glj';
  let o = {};
  let a = [1, 2];
  console.log(typeof n, n instanceof Number); /** n 为 Number 类型，instanceof 检测基本类型会始终返回 false 因为基本类型不是对象 */
  console.log(typeof s, s instanceof String); /** s 为 String 类型，instanceof 检测基本类型会始终返回 false 因为基本类型不是对象 */
  console.log(typeof null, null instanceof Object); /** n 为 Null 类型，instanceof 检测基本类型会始终返回 false 因为基本类型不是对象 */
  console.log(typeof o, o instanceof Object); /** o 为一个空对象，对象为object类型，因此instanceof返回true */
  console.log(typeof a, a instanceof Object); /** o 为一个数组，数组为object类型，因此instanceof返回true */
}
test1();