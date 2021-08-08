/**
 * 1.用两种方式声明两个不同的对象，均包含属性 name，age，male（性别），属性值自己定义，两个对象属性值区分一下
 * 2.使用两种方式打印任意对象的 name 属性
 * 3.定义一个函数 getValue，接受两个参数，第一个是 o，第二个是 key，函数打印对象 o 的 key 属性
 *    注意判断 o 的类型，非对象时，打印： o 不是对象，并返回
 *    key 是入参，是动态变化的，不是 o 里面名为 key 的属性
 * 3.定义一个函数 getInfo，使用 getValue 按照格式打印传入对象的 name，age，male 属性：'name: 属性值，age: 属性值，male: 属性值'
 * 4.使用 getInfo 打印 1 创建的两个对象
 */
let loli = {
  'name': 'loli',
  'age': 14,
  'male': 'female'
};

let glj = new Object();

glj.name = 'glj';
glj.age = 24;
glj.male = 'male';

console.log(loli.name);
console.log(glj['name']);

function getValue(o, key) {
  if (typeof o === 'object') {
    console.log(o[key]);
    return o[key];
  }

  console.log(o, '不是对象');
  return;
}

console.log(getValue(loli, 'age'));

function getInfo(o) {
  console.log('name:', getValue(o, 'name'), '\nage:', getValue(o, 'age'), '\nmale:', getValue(o, 'male'));
}

getInfo(loli);
getInfo(glj);


/**
 * 1.定义一个函数 shouldShow，有一个入参，入参类型是对象，入参对象要求两个属性，第一个属性是数组 list，第二个属性是 enable
 *    当 list 长度大于 0，并且 enable 是 true 时，打印 list
 *    否则不打印
 *    注意判断入参的类型，并兼容属性不存在的情况
 * 2.调用 shouldShow：
 *    shouldShow({ list: ['g', 'l', 'j'], enable: true })
 *    shouldShow({ list: ['g', 'l', 'j'], enable: false })
 *    shouldShow({ list: [], enable: true })
 *    shouldShow({ enable: true })
 */
function shouldShow(props) {
  if (typeof props === 'object') {
    console.log(props, '不符合要求');
    return;
  }

  const { list, enable } = props;

  if (list && list.length > 0 && enable) {
    console.log(list);
  }
}

shouldShow({ list: ['g', 'l', 'j'], enable: true });
shouldShow({ list: ['g', 'l', 'j'], enable: false });
shouldShow({ list: [], enable: true });
shouldShow({ enable: true });
