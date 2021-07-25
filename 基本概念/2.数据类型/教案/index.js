
/** 数据类型 */
function type() {
  const number = 1;
  const string = 'hello world';
  const boolean = true;
  const nullable = null;
  const undef = undefined;

  console.log('number:', number);
  console.log('string:', string);
  console.log('boolean:', boolean);
  console.log('nullable:', nullable);
  console.log('undef:', undef);

  /** 判断数据类型，使用 typeof 运算符 */
  console.log('判断数据类型');
  console.log('number:', typeof number);
  console.log('string:', typeof string);
  console.log('boolean:', typeof boolean);
  console.log('nullable:', typeof nullable);
  console.log('undef:', typeof undef);

  /** typeof 何时使用？
   * 你需要根据数据类型来决定接下来要做什么的时候
   * 
   * 如：
   */
  if (typeof number === 'number') {
    console.log('this is a number');
  }
}

type()
