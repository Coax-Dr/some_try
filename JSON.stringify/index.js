const stu = {
  name: "zcxiaobao",
  age: 18
}

// 将对象转化为JSON字符串
console.log(JSON.stringify(stu));

/**
 * JSON.stringify的第二个参数replacer，有函数和数组两种形式
 * 函数：将被转化的对象的每一个属性都会被其处理
 * 数组：仅仅只转化存在于数组中的属性
 */

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7
}

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

// replacer为函数
const jsonFooFn = JSON.stringify(foo, replacer);
console.log("jsonFooFn", jsonFooFn);

const replacerArr = ["week", "transport"];
// replacer为数组
const jsonFooArr = JSON.stringify(foo, replacerArr);
console.log("jsonFooArr", jsonFooArr);

// 若被转化的对象某个属性的值为undefined，则JSON.stringify会忽略
const undefinedObj = {
  age: 18,
  name: "abao",
  power: undefined
}

const jsonUndefinedObj = JSON.stringify(undefinedObj, ["name", "power"]);
console.log("jsonUndefinedObj", jsonUndefinedObj);
// 输出：{ name: "abao" }, 值为undefined的power没有被返回

/**
 * Number类型中的NaN，Infinity，null被转化为null
 */

console.log(JSON.stringify([NaN, Infinity, null]));
// 输出：[null, null, null]

// 应用场景：对后端返回的无用数据进行过滤