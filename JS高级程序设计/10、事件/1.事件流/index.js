

// 1.理解事件捕获和事件冒泡 p345
// 2.在 button 监听 click 事件并打印触发事件的元素
const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
  console.log(event.target);
});

// 3.在 body 捕获 click 事件并打印触发事件的元素，并观察 button 监听的事件
// document.body.addEventListener('click', (event) => {
//   console.log(event.target);
// }, true);

// 4.在 body 仅监听 click 事件并打印触发事件的元素
document.body.addEventListener('click', (event) => {
  console.log(event.target);
});

// 5.在 button 捕获 click 事件并打印触发事件的元素，并观察 body 监听的事件
// btn.addEventListener('click', (event) => {
//   console.log(event.target);
// }, true);

// 6.在 button 和 body 均只监听 click 时，在 button 处阻止默认事件和阻止冒泡
btn.onclick = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

document.body.addEventListener('click', (event) => {
  console.log(event.currentTarget); // 取消冒泡后不打印
});

btn.addEventListener('click', (event) => {
  console.log(event.currentTarget);
});

// 7.记忆 p363 事件类型，了解 p368 鼠标事件，了解 p379 键盘事件
// UI，焦点，鼠标，滚轮，文本，键盘，合成，变动，变动名称
// UI：load，unload,abort,error ,select,resize,scroll
// 鼠标：click,dblclick,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup
// 键盘：keydown,keypress,keyup 

// 8.在 input 框输入内容，回车按下时在控制台打印其内容
const input = document.querySelector('input');
input.onkeypress = (e) => {
  if (e.keyCode === 13) {
    console.log(input.value);
  }
}

