/**
 * 1.用 3 种方式声明数组
 * 2.声明一个数组 glj，包含 'g', 'l', 'j' 三项，打印数组第二项，打印数组长度
 * 3.设置 glj 的第四项为 'nb'，打印数组长度，说明为什么
 * 4.设置 glj 数组的长度为 3，打印第四项，打印整个数组，并说明为什么
 * 5.给 glj 末尾新增一项 'nb'
 */

/**
 * 用两种方式判断
 * 1.判断 [] 是否为数组
 * 2.判断 window 是否为数组
 * 3.判断 window.frames 是否为数组
 * 4.判断 new Array() 是否为数组
 */

/**
 * 1.理解 p89 [person1, person2].toString() 的结果的原因
 * 2.打印 glj
 * 3.使用 - 拼接 glj 的项
 * 4.创建两个对象 g, l, g = { name: 'G' }, l = { name: 'L' }，创建一个数组 j = [g, l]
 *    输出这个数组：用两种方式输出数组每一项的 name 属性，用逗号分隔；ps.可修改 g, l 对象，也可使用循环输出
 *    预期输出结果：G, L
 */

/**
 * 栈方法
 * 1.定义一个空数组 stack
 * 2.向 stack 入栈两个值 'a', 'b'，打印 stack
 * 3.向 stack 出栈，打印出栈的值，打印 stack
 */

/**
 * 队列方法
 * 1.定义一个空数组 queue，此数组右进左出（尾部进，头部出）
 * 2.向 queue 入队两个值 1, 2，打印 queue，打印 queue 的长度
 * 3.向 queue 出队，打印出队值，打印 queue，打印 queue 的长度
 * 4.定义一个空数组 queueReverse，此数组左进右出（头部进，尾部出）
 * 5.向 queueReverse 入队两个值 1, 2，打印 queueReverse，打印 queueReverse 的长度
 * 6.向 queueReverse 出队，打印出队值，打印 queueReverse，打印 queueReverse 的长度
 */

/**
 * 重排序方法
 * 1.定义数组 a1 = [1, 2, 3, 4, 5]
 * 2.将 a1 颠倒，打印 a1，说明原因
 * 3.使用 sort 方法将 a1 恢复从小到大排序
 * 4.定义数组 ao = [{ name: 'g', age: 20 }, { name: 'l', age: 18 }, { name: 'j', age: 22 }]
 *    根据 age 属性对 ao 进行从小到大排序
 * 5.执行 a1.reverse().reverse() 并说明为什么可以连续点式调用（链式调用）
 */

/**
 * 操作方法
 * 1.定义数组 a1 = [1, 2, 3, 4, 5]，a2 = [6, 7]
 * 2.拼接 a1 和 a2 为 a3，打印 a1，a2 并说明为什么
 * 3.截取 a3 的第一项到第三项共三项为 a4，打印 a3，说明为什么
 * 4.截取并删除 a3 的第一项到第三项共三项为 a5，打印 a3，并说明为什么
 * 5.在 a2 的首项前插入两个项 3, 4，打印 a2（用两种方法）
 * 6.在 a2 的项中值为 4 和 6 的项中间插入 5，打印 a2
 * 7.将 a2 的项中值为 3, 4 两项修改为 7, 6，打印 a2
 * 8.注意观察这些方法执行后的返回值，如：console.log(a2.splice(0, 1)); // [6]
 */

/**
 * 位置方法
 * 1.定义数组 a1 = [1, 2, 3, 2, 1]，定义对象 o1 = { name: 'glj' }, o2 = { name: 'nb' }, 定义数组 ao = [{ name: 'glj' }, { name: 'nb' }]
 * 2.查找第一个值为 1 的项
 * 3.查找最后一个值为 2 的项
 * 4.查找 o1 在 ao 中的位置
 * 5.查找 { name: 'glj' } 在 ao 中的位置，结合 4 说明为什么
 */

/**
 * 迭代方法
 * 1.定义数组 [1, 2, 3, 4], 使用 every 函数，当数组每一项都大于 0 时，打印 这是一个正数数组
 * 2.定义数组 [1, 2, 3, 4, 5, 6, 7, 8, 9]，使用 filter 函数，筛选能被 2 或 3 整除的项为一个新数组
 * 3.定义数组 [{ name: 'glj' }, { name: 'nb' }]，使用 forEach 函数打印每一项的 name 属性
 * 4.定义数组 [{ name: 'glj' }, { name: 'nb' }]，使用 map 函数，取每一项的 name 属性返回为一个新的数组，参考答案 ['glj', 'nb']
 * 5.定义数组 [{ name: '剑术', children: [] }, { name: '魔法', children: ['水系', '火系'] }]，
 *    使用 some 函数，当有任意一项的 children 长度不为 0 时，定义 showTab 变量为 true，否则为 false
 * 6.定义数组 [{ name: '剑术', children: ['大剑', '单手剑', '双手剑'] }, { name: '魔法', children: ['水系', '火系'] }]，
 *    选择合适的迭代方法，返回一个新的字符串数组，其中第一项的预期结果是："剑术技能：大剑、单手剑、双手剑"
 * 7.使用 filter 函数实现第 5 题（目测苟东西做不来）
 */

/**
 * 归并方法
 * 
 * 附加：Array.reduce((prev, cur, index, array) => {}, initialValue)，reduce 还可以接收一个 initialValue 参数作为 prev 的初始值
 * 
 * 1.定义数组 [1, 2, 3, 4, 5]
 * 2.使用 reduce 返回数组的和，并打印每次执行操作时的 index，并说明为什么
 * 3.使用 reduce 返回 5 加上数组每一项的和（ps. 用 initialValue），并打印每次执行操作时的 index，并说明为什么
 * 4.定义数组 [{ name: 'glj', age: 22 }, { name: 'nb', age: 23 }]，使用 reduce 返回一个对象：{ glj: 22, nb: 23 }
 */
