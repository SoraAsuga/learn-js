// 1.创建 style 元素，编写样式将 id 为 draft 的元素边框设置为黑色，插入到 head
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode('#draft{border: 1px solid black}'));
const head = document.getElementsByTagName('head')[0];
head.appendChild(style);

// 2.循环插入 10 个 p 标签，内容分别为从 1 到 10 递增的自然数
function insertP() {
  const draft = document.querySelector('#draft');
  for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.innerHTML = i;
    draft.appendChild(p);
  }
}
insertP();

// 3.获取第 8 个 p 标签，并将其文本改为蓝色
const p8 = document.querySelector('#draft').children[9];
p8.style = 'background-color: rgb(85, 178, 255)';

// 4.获取第 8 个 p 标签的前后所有兄弟节点
const r = new Array();
const draft = document.querySelector('#draft').children;
for (let i = 0, len = draft.length; i <= len; i++) {
  if (draft[i] !== p8) {
    r.push(draft[i]);
  }
}

// 5.创建 style 元素，设置 highlight 类的文本颜色为红色，插入到 head
const style1 = document.createElement('style');
style1.type = 'text/css';
style1.appendChild(document.createTextNode('.highlight{color: red}'));
head.appendChild(style1);

// 6.点击 button 按钮时，使用 classList 给文本为 draft 的元素添加 highlight 类，再次点击后取消添加
// 7.给 button 添加自定义属性 glj，值为 233，当点击 button 时打印自定义属性 glj 的值
const button = document.querySelector('button');
button.setAttribute('data-glj', '233');

button.onclick = function addHighlight() {

  console.log(button.dataset.glj);
  if (!draft[0].classList.contains('highlight')) {
    return draft[0].classList.add('highlight');
  }
  draft[0].classList.remove('highlight');
}

// 8.获取 button 的 innerHTML 和 outerHTML 并理解
console.log(button.innerHTML, '|', button.outerHTML);

// 9.设置 button 的文本为 toggle draft
button.innerHTML = 'toggle draft';

// 10.获取 button 的父节点，并获取 button 的宽高、相对页面的 x y 坐标（p321）
console.log(button.parentNode, '高:',button.offsetHeight, '宽:',button.offsetWidth, 'y:', getElementTop(button), 'x:',getElementLeft(button));

function getElementLeft (element) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getElementTop (element) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

// 11.理解 offsetXXX、clientXXX、scrollXXX 三种位置属性的用法（p321）
console.log('button.offsetHeight', button.offsetHeight, 'button.offsetWidth', button.offsetWidth, 'button.offsetTop', button.offsetTop, 'button.offsetLeft', button.offsetLeft);
console.log('button.clientHeight', button.clientHeight, 'button.clientWidth', button.clientWidth, 'button.clientTop', button.clientTop, 'button.clientLeft', button.clientLeft);
console.log('button.scrollHeight', button.scrollHeight, 'button.scrollWidth', button.scrollWidth, 'button.scrollTop', button.scrollTop, 'button.scrollLeft', button.scrollLeft);
