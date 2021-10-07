/**
 * 生成以下虚拟 DOM
 *    <main>
 *      <header>Hello World</header>
 *      <section>Yes sir!</section>
 *    </main>
 * 
 * 1. 定义一个变量 headerClass，给 header 传入动态类名 headerClass
 * 2. 定义一个变量 hello，将 section 的内容改为 hello 变量的值（转为小写）
 * 3. 给 section 定义一个 style，将背景色设置为黄色
 * 4. 增加一个 footer，一个变量 shouldShowFooter，当 shouldShowFooter 为 true 时，显示 footer（用 JSX 语法结合 JS 运算符实现）
 * 5. 理解 JSX 标签首字母大小写的区别
 * 6. 在 section 内增加一个列表，渲染 ['React', 'Vue', 'Angular', 'Svelte', 'Ember']
 *    要求用数组的 map 方法来生成节点，并将这个方法封装为函数，在 section 里调用函数来得到节点
 */
