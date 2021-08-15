/**
 * 1.用字面量法创建一个自定义对象，包含 name、age 属性和 sayName 函数，函数打印该对象的 name
 * 2.给刚刚创建的变量的 name 属性增加一个 get 访问器，返回 gljnb
 * 3.理解访问器，并理解为什么访问器属性（如 name 的 get 访问器）内不能调用自己（this.name）
 */
const glj = {
  name: 'glj',
  age: 23,
  sayName: function() {
    console.log(this.name);
  }
};
glj.sayName();
Object.defineProperty(glj, 'nb', {
  get: function () {
    console.log(this.name);
    return 'gljnb';
  }
});
console.log(glj.nb);
