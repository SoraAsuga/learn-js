/**
 * 1.以声明式和函数表达式声明两个函数，传入两个参数 a, b，返回 a + b 的值
 * 2.在定义 1 中的函数之前，调用 1 中的两个函数，并说明原因
 * 3.将 1 中的函数声明式函数改名为 sum，仅利用 sum 计算 1 + 2 + 3
 * 4.实现一个函数 map，第一个参数是一个函数参数 handler，此函数可接收三个形参，item、index、array，第二个参数是数组
 *    函数内部遍历数组，每次遍历调用 handler 并传入其需要的参数
 * 5.实现一个函数 createCounter，有一个内部变量 count，一个内部函数 add，add 函数会让 count + 1，一个内部函数 dec，dec 函数会让 count - 1
 *    createCounter 返回一个对象，此对象的属性为函数 add 和 dec
 * 6.理解 p114 函数的 this
 * 7.理解 arguments 并打印函数 sum 的 arguments
 * 8.实现一个函数 log，其形参个数不定，函数功能是将传入的形参使用 console.log 以一行打印出
 * 9.定义一个变量 o，属性 name = 'loli'，属性 getName 返回 this.name；定义变量 o2，属性 name = 'glj'
 *    利用 call 和 apply 使用 o 的 getName 来获取 o2 的 name
 * 10.定义一个函数 getValue，传入 key，函数返回 this 上属性为 key 的值
 *    利用 bind 将 getValue 绑定到 o，调用 getValue 获取 o 的 name
 * 11.定义一个构造函数 Animal（构造函数的首字母必须大写），有两个实例属性 type、food（在构造函数内使用 this 创建的属性就是实例属性）
 *    有一个原型方法（p162） eatWhat，返回 'type 吃 food'（type 和 food 替换为属性值）
 *    使用 Animal 创建两个实例 cat 和 dog，cat 吃 fish，dog 吃 bone
 *    利用 typeof 和 instanceof 判断实例的成分，理解构造函数
 *    打印两个实例，打印两个实例的 type 和 food 属性
 */

// add1(1, 2);
// add2(1, 2); 执行时函数还未声明，因此报错
function add1(a, b) {
  return a + b;
}
console.log(add1(1, 2));

const sum = function (a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(1, 2));

console.log(sum(sum(1, 2), 3));

function map(handler, array) {
  for (let i = 0; i < array.length; i++) {
    handler(item, index, array);
  }
}

function createCounter() {
  let count = 0;

  function add() {
    return ++count;
  }

  function dec() {
    return --count;
  }

  return {
    add,
    dec
  };
}

function log1() { 
  const len = arguments.length;
  const logs = [];
  for (let i = 0; i < len; i++) {
    logs[i] = arguments[i];
  }
  console.log(logs);
}
log1(1, 2, 3, 4, 5);

function log2(...a) {
  console.log(...a);
}
log2(1, 2, 3, 4, 5);

const o = {
  name: "loli",
  getName: function () {
    return this.name;
  },
};

const o2 = {
  name: 'glj'
};

console.log('9', o.getName.call(o2));

function getValue (key) {
  return this[key];
}
console.log(getValue.call(o, 'name'));

function Animal (type, food) {
  this.type = type,
  this.food = food
}
Animal.prototype.eatWhat = function () {
  return this.type + ' eat ' + this.food;
}
const cat = new Animal('cat', 'fish');
const dog = new Animal('dog', 'bone');
console.log('typeof cat:', typeof cat, 'typeof dog:', typeof dog, '\ninstanceof cat:', cat instanceof Object,  '\ninstanceof dog:', dog instanceof Object, 'cat:', cat, 'dog:', dog, 'catType:', cat.type, 'catFood:', cat.food, 'dogType:', dog.type, 'dogFood:', dog.food);
console.log(cat.eatWhat(), '\n', dog.eatWhat());
