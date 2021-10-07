/**
 * 理解 6.3.1 原型链
 * 1.实现一个构造函数 Glj，包含 name 属性，sayName 原型方法
 * 2.实现一个构造函数 Lolikonn，包含 name、hair 属性，并原型链继承 Glj
 * 3.实例化 Lolikonn，调用 sayName 方法
 */

function Glj() {
  this.name = 'glj';
}

Glj.prototype.sayName = function () {
  console.log('say: ' + this.name);
};

function Lolikonn() {
  this.name = 'gdx';
  this.hair = 'black';
}

Lolikonn.prototype = new Glj();

const gdx = new Lolikonn();
console.log(gdx);
gdx.sayName();

/**
 * 精读 6.3.6 寄生组合继承
 * 1.实现寄生组合继承的函数，传入子类和父类（背下来并理解）
 * 2.通过寄生组合继承重新使上面 Lolikonn 继承 Glj，并实例化一个 Lolikonn
 * 3.理解书上提到的所有继承方式的优缺点（可以百度一下进行理解）
 */
function inheritPrototype (subType, superType) {
  const prototype = new Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function Glj2() {
  this.name = 'glj';
}

Glj2.prototype.sayName = function () {
  console.log('say: ' + this.name);
};

function Lolikonn2() {
  Glj2.call(this);
  this.name = 'gdx';
  this.hair = 'black';
}

inheritPrototype(Lolikonn2, Glj2);

const gdx2 = new Lolikonn2();
console.log(gdx2);
gdx2.sayName();
