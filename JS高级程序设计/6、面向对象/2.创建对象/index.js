/**
 * 1.理解工厂模式，实现一个工厂函数，可创建包含 name、age 的对象
 * 2.利用刚才实现的工厂函数，创建任意两个不同的对象
 * 3.理解构造函数，实现一个构造函数（函数名首字母必须大写），可创建包含 name、age、sayName 函数的对象，理解构造函数的 this
 * 4.利用刚刚实现的构造函数创建任意一个对象（实例）glj，并使用 instanceof 理解构造函数创建的对象和构造函数的关系
 */

function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  return o;
}

const glj = createPerson('glj', 23);
const loli = createPerson('loli', 14);
console.log(glj, loli);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}
let glj2 = new Person('glj', 24);
console.log(glj2, glj2 instanceof Object, glj2 instanceof Person);

/** 原型模式
 * 1.理解 prototype，理解 p148 图，精读 6.2.3 小节
 * 2.给上面实现的构造函数增加一个原型方法 sayHi，方法打印 'name say: hi.' （name 为对象属性）
 * 3.打印 glj，调用 sayHi，理解原型方法
 * 4.给上面实现的构造函数增加一个原型属性 type = 'glj'，使用 glj 调用 type 属性并理解 p156 原型的动态性
 * 5.使用 in 操作符判断 name 属性和 type 属性、toString 是否来自 glj，理解原理
 */
Person.prototype.sayHi = function () {
  console.log(this.name + ' say: Hi.');
};
glj2.sayHi();
Person.prototype.type = 'glj';
console.log(glj2.type);
console.log('name' in glj2, 'type' in glj2, 'toString' in glj2);
