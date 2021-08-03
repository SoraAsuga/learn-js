/**
 * 1.用 3 种方式声明数组
 * 2.声明一个数组 glj，包含 'g', 'l', 'j' 三项，打印数组第二项，打印数组长度
 * 3.设置 glj 的第四项为 'nb'，打印数组长度，说明为什么
 * 4.设置 glj 数组的长度为 3，打印第四项，打印整个数组，并说明为什么
 * 5.给 glj 末尾新增一项 'nb'
 */
const a = ['g', 'l', 'j'];
const b = new Array();
b[0] = 'g';
b[1] = 'l';
b[2] = 'j';
const c = new Array('g', 'l', 'j');
const glj = ['g', 'l', 'j'];
console.log('glj[1]:', glj[1]);
console.log('glj.length:', glj.length);
glj[3] = 'nb';
console.log('glj.length:', glj.length);
console.log('glj:', glj);
/** 直接为数组的第某项赋值会把值直接赋给该数组的对应项上，如果该项所在位置长于数组长度则会延长数组长度 */

glj.length = 3;
console.log(glj[3]);
console.log(glj);
/** 定义数组长度时如果数组长度短于定义长度则会用空项填充数组，反之则会删除数组后面的项，直到数组长度与定义长度相同 */

glj.push('nb');


/**
 * 用两种方式判断
 * 1.判断 [] 是否为数组
 * 2.判断 window 是否为数组
 * 3.判断 window.frames 是否为数组
 * 4.判断 new Array() 是否为数组
 */
console.log('[]:', Array.isArray([]));
console.log('[]:', [] instanceof Array);

console.log('window:', Array.isArray(window));
console.log('window:', window instanceof Array);

console.log('window.frames:', Array.isArray(window.frames));
console.log('window.frames:', window.frames instanceof Array);

console.log('new Array():', Array.isArray(new Array()));
console.log('new Array():', new Array() instanceof Array);

/**
 * 1.理解 p89 [person1, person2].toString() 的结果的原因
 * 2.打印 glj
 * 3.使用 - 拼接 glj 的项
 * 4.创建两个对象 g, l, g = { name: 'G' }, l = { name: 'L' }，创建一个数组 j = [g, l]
 *    输出这个数组：用两种方式输出数组每一项的 name 属性，用逗号分隔；ps.可修改 g, l 对象，也可使用循环输出
 *    预期输出结果：G, L
 */
console.log('glj:', glj);
console.log('glj-:', glj.join('-'))
const g = {
  name: 'G'
};
const l = {
  name: 'L'
};
const j = [g, l];
console.log('j:', j);
console.log('glj:', j[0].name, j[1].name);
console.log('glj:', j[0]['name'], j[1]['name']);


/**
 * 栈方法
 * 1.定义一个空数组 stack
 * 2.向 stack 入栈两个值 'a', 'b'，打印 stack
 * 3.向 stack 出栈，打印出栈的值，打印 stack
 */
const stack = [];
stack.push('a', 'b');
console.log('stack:', stack);
console.log('pop:', stack.pop());
console.log('stack:', stack);

/**
 * 队列方法
 * 1.定义一个空数组 queue，此数组右进左出（尾部进，头部出）
 * 2.向 queue 入队两个值 1, 2，打印 queue，打印 queue 的长度
 * 3.向 queue 出队，打印出队值，打印 queue，打印 queue 的长度
 * 4.定义一个空数组 queueReverse，此数组左进右出（头部进，尾部出）
 * 5.向 queueReverse 入队两个值 1, 2，打印 queueReverse，打印 queueReverse 的长度
 * 6.向 queueReverse 出队，打印出队值，打印 queueReverse，打印 queueReverse 的长度
 */
const queue = [];
queue.push(1, 2);
console.log('queue:', queue, queue.length);
console.log('shift:', queue.shift());
console.log('queue:', queue, queue.length);
const queueReverse = [];
queueReverse.unshift(1, 2);
console.log('queueReverse:', queueReverse, queueReverse.length);
console.log('pop:', queueReverse.pop());
console.log('queueReverse:', queueReverse, queueReverse.length);

/**
 * 重排序方法
 * 1.定义数组 a1 = [1, 2, 3, 4, 5]
 * 2.将 a1 颠倒，打印 a1，说明原因
 * 3.使用 sort 方法将 a1 恢复从小到大排序
 * 4.定义数组 ao = [{ name: 'g', age: 20 }, { name: 'l', age: 18 }, { name: 'j', age: 22 }]
 *    根据 age 属性对 ao 进行从小到大排序
 * 5.执行 a1.reverse().reverse() 并说明为什么可以连续点式调用（链式调用）
 */
function test1() {
  const a1 = [1, 2, 3, 4, 5];
  console.log('a1:', a1.reverse());
  /** .reverse() 将反转原数组顺序 */
  console.log('a1:', a1.sort());
  const ao = [{
    name: 'g',
    age: 20
  }, {
    name: 'l',
    age: 18
  }, {
    name: 'j',
    age: 22
  }];
  ao.sort(ageSort);
  console.log(ao);

  function ageSort(o1, o2) {
    return o1.age - o2.age;
  }

  console.log(a1.reverse().reverse());
}
test1();
/** 因为 reverse() 执行会操作原数组，因此第二个 .reverse() 相当于在第一个 .reverse() 的结果上执行，因此可以连续点式调用 */

/**
 * 操作方法
 * 1.定义数组 a1 = [1, 2, 3, 4, 5]，a2 = [6, 7]
 * 2.拼接 a1 和 a2 为 a3，打印 a1，a2 并说明为什么
 * 3.截取 a3 的第一项到第三项共三项为 a4，打印 a3，说明为什么
 * 4.截取并删除 a3 的第一项到第三项共三项为 a5，打印 a3，并说明为什么
 * 5.在 a2 的首项前插入两个项 3, 4，打印 a2（用两种方法）
 * 6.在 a2 的项中值为 4 和 6 的项中间插入 5，打印 a2
 * 7.将 a2 的项中值为 3, 4 两项修改为 7, 6，打印 a2
 * 8.注意观察这些方法执行后的返回值，如：console.log(a2.splice(0, 1)); // [6]
 */
function test2() {
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [6, 7];
  const a3 = a1.concat(a2);
  console.log('a1:', a1, 'a2:', a2, 'a3:', a3);
  /** concat() 方法基于数组内的所有项创建一个新数组，并将传入的项添加到新数组的末尾。 */
  const a4 = a3.slice(0, 3);
  console.log('a4:', a4);
  /** slice() 方法基于当前数组中的一或多个项创建一个新数组, 能够接受一或两个参数，即要返回项的起始和结束位置。*/
  const a5 = a3.splice(0, 3);
  console.log('a3:', a3);
  /** splice() 方法可以删除任意数量的项，提供两个参数，要删除的第一项位置和要删除的项数 */
  console.log('a2.unshift(3, 4):', a2.unshift(3, 4));
  console.log('a2:', a2);
  console.log('a2.splice(0, 0, 3, 4):', a2.splice(0, 0, 3, 4));
  console.log('a2:', a2);
  console.log('a2.splice(4, 0, 5):', a2.splice(4, 0, 5));
  console.log('a2:', a2);
  console.log('a2.splice(0, 4, 7, 6 ,7, 6):', a2.splice(0, 4, 7, 6, 7, 6));
  console.log('a2:', a2);
}
test2();

/**
 * 位置方法
 * 1.定义数组 a1 = [1, 2, 3, 2, 1]，定义对象 o1 = { name: 'glj' }, o2 = { name: 'nb' }, 定义数组 ao = [{ name: 'glj' }, { name: 'nb' }]
 * 2.查找第一个值为 1 的项
 * 3.查找最后一个值为 2 的项
 * 4.查找 o1 在 ao 中的位置
 * 5.查找 { name: 'glj' } 在 ao 中的位置，结合 4 说明为什么
 */
function test3() {
  const a1 = [1, 2, 3, 2, 1];
  const o1 = {
    name: 'glj'
  };
  const o2 = {
    name: 'nb'
  };
  const ao = [{
    name: 'glj'
  }, {
    name: 'nb'
  }];
  console.log('indexOf:', a1.indexOf(1));
  console.log('lastIndexOf:', a1.lastIndexOf(2));
  console.log('IndexOf:', ao.indexOf(o1));
  console.log('IndexOf:', ao.indexOf({
    name: 'glj'
  }));
}
test3();

/**
 * 迭代方法
 * 1.定义数组 [1, 2, 3, 4], 使用 every 函数，当数组每一项都大于 0 时，打印 这是一个正数数组
 * 2.定义数组 [1, 2, 3, 4, 5, 6, 7, 8, 9]，使用 filter 函数，筛选能被 2 或 3 整除的项为一个新数组
 * 3.定义数组 [{ name: 'glj' }, { name: 'nb' }]，使用 forEach 函数打印每一项的 name 属性
 * 4.定义数组 [{ name: 'glj' }, { name: 'nb' }]，使用 map 函数，取每一项的 name 属性返回为一个新的数组，参考答案 ['glj', 'nb']
 * 5.定义数组 [{ name: '剑术', children: [] }, { name: '魔法', children: ['水系', '火系'] }]，
 *    使用 some 函数，当有任意一项的 children 长度不为 0 时，定义 showTab 变量为 true，否则为 false
 * 6.定义数组 [{ name: '剑术', children: ['大剑', '单手剑', '双手剑'] }, { name: '魔法', children: ['水系', '火系'] }]，
 *    选择合适的迭代方法，返回一个新的字符串数组，其中第一项的预期结果是："剑术技能：大剑、单手剑、双手剑"
 * 7.使用 filter 函数实现第 5 题（目测苟东西做不来）
 */
function test4() {

  const a = [1, 2, 3, 4];

  const result = a.every((num) => {
    return num > 0;
  });

  if (result) {
    return console.log('every: 这是一个正数数组');
  }
}
test4();

function test5() {
  const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b1 = b.filter((num) => {
    return num % 2 === 0 || num % 3 === 0;
  });
  console.log('filter:', b, b1);

  const c = [{
    name: 'glj'
  }, {
    name: 'nb'
  }];
  c.forEach((num) => {
    console.log('forEach:', num.name);
  });

  const d = [{
    name: 'glj'
  }, {
    name: 'nb'
  }];
  const d1 = d.map((num) => {
    return num.name;
  });
  console.log('map:', d, d1);

  const e = [{
    name: '剑术',
    children: []
  }, {
    name: '魔法',
    children: ['水系', '火系']
  }];
  let showTab = e.some((skill) => {
    return skill.children.length !== 0;
  });
  console.log('some:', showTab);

  const f = [{
    name: '剑术',
    children: ['大剑', '单手剑', '双手剑']
  }, {
    name: '魔法',
    children: ['水系', '火系']
  }];
  const f1 = f.map((skill) => {
    return skill.name + '技能: ' + skill.children;
  });
  console.log("技能：", f, f1);

  function skillQuery(skill) {

    const result = skill.filter((skill) => {
      return skill.children.length !== 0;
    });

    if (result === []) {
      return false;
    }
    return true;
  };
  console.log('filter-some:', skillQuery(e));
}
test5();



/**
 * 归并方法
 * 
 * 附加：Array.reduce((prev, cur, index, array) => {}, initialValue)，reduce 还可以接收一个 initialValue 参数作为 prev 的初始值
 * 
 * 1.定义数组 [1, 2, 3, 4, 5]
 * 2.使用 reduce 返回数组的和，并打印每次执行操作时的 index，并说明为什么
 * 3.使用 reduce 返回 5 加上数组每一项的和（ps. 用 initialValue），并打印每次执行操作时的 index，并说明为什么
 * 4.定义数组 [{ name: 'glj', age: 22 }, { name: 'nb', age: 23 }]，使用 reduce 返回一个对象：{ glj: 22, nb: 23 }
 */
function test6() {
  const a = [1, 2, 3, 4, 5];
  const a1 = a.reduce((num1, num2, index) => {
    console.log('index:', index);
    return num1 + num2;
  });
  console.log('reduce:', a, a1);
  /** index 返回的为 reduce 当前元素的索引，num1 为初始值/上次计算的结果，num2 为当前元素 */

  const b = [];

  const c =  [{ name: 'glj', age: 22 }, { name: 'nb', age: 23 }];
  const c1 = c.reduce((name, age, index) => {
    console.log('index:', index);
    return name + ':' + age;
  });
  console.log(c1);
}
test6();