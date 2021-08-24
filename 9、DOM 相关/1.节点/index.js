/**
 * 1.创建一个元素 p，内容 glj
 * 2.将 p 插入 id 为 draft 的孩子末尾
 * 3.再创建一个元素 p，内容 glj2 并插入 id 为 draft 的孩子头部
 * 4.3s 后删除 glj2 所在的 p 元素
 * 5.获取 glj 所在的 p 元素（两种方法）
 * 6.获取 glj 的标签名
 * 7.设置 glj 的属性 name 为 glj
 * 8.获取 glj 的父节点
 */

const draft = document.querySelector('#draft');
const p1 = document.createElement('p');
p1.innerText = 'glj';
draft.appendChild(p1);

const p2 = document.createElement('p');
p2.innerText = 'glj2';
draft.insertBefore(p2, draft.childNodes[0]);

setTimeout(function () {
  draft.removeChild(draft.firstChild)
}, 3000);

const a = document.querySelector('#draft').children[2];
const a1 = document.querySelector('#draft').lastElementChild;
console.log(a.localName);
a.setAttribute('name', 'glj');
console.log(a.parentNode);
