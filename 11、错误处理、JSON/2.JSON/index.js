/**
 * 理解 JSON 和 js 对象的关系 p564
 */

// 1.定义 o = { name: 'glj', age: 233, sex: true, child: null, wife: undefined, friends: ['glj', 'xxx'], say: function() {} }
const o = {
  name: 'glj',
  age: 233,
  sex: true,
  child: null,
  wife: undefined,
  friends: ['glj', 'xxx'],
  say: function () {}
};

// 2.序列号 o 为 json 字符串，要求每行空两格，并对比对象 o
const jsonO = JSON.stringify(o, null, 2);
console.log('o:', o, 'json:',  jsonO);

// 3.反序列化刚刚的 json 字符串
console.log(JSON.parse(jsonO));

// 4.定义 o2 = { name: 'glj' } 并序列化，再反序列化得到 o3，修改 o2 的 name 属性，比较 o3 的 name 属性
const o2 = { name: 'glj' } ;
const jsonO2 = JSON.stringify(o2);
const o3 = JSON.parse(jsonO2);
o2.name = 'gdx';
console.log('o2', o2, 'o3', o3);