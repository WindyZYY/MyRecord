//基本数据类型：null,undefined,Number,String,Boolean,Object
//ES6新增了Symbol

//基本用法：Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。
//Symbol标志着一个独一无二的变量
let sy=Symbol('kk');
console.log(sy);//Symbol(kk)
console.log(typeof(sy));//symbol
let sy1 = Symbol('kk');//相同参数返回的值不一样
console.log(sy==sy1);//false
console.log(sy===sy1);//false

//使用场景：
//1. 作为属性名，保证属性不重名
let sym=Symbol("key1");

//写法1
let syObject1={};
syObject1[sym]='val';
console.log(syObject1);//{[Symbol(key1)]: 'val'}

//写法2
let syObject2={
    [sym]: 'val'
};
console.log(syObject2);

//写法3
let syObject3 = {};
Object.defineProperty(syObject3, sym, {value:'val'});
console.log(syObject3);//不知道为什么，是{}
//不能用.运算符，要用方括号，也就是说syObject1.sym是undefined

//注意：symbol值作为属性名，该属性是工友属性，可以在类的外部访问
//但是不会出现在for循环，也不会被Object.keys(),Object,getOwnPropertyNames()返回
//如果要读取对象的Symbol属性，可以使用Object.getOwnPropertySymbols()或者Reflect.ownKeys();
{
    let syObject = {};
    syObject[sy] = "kk";
    console.log(syObject);
    
    for (let i in syObject) {
    console.log(i);
    }    // 无输出
    
    console.log(Object.keys(syObject));                     // []
    console.log(Object.getOwnPropertySymbols(syObject));    // [Symbol(key1)]
    console.log(Reflect.ownKeys(syObject));                 // [Symbol(key1)]
}

//2. 定义常量
//ES5里使用字符串表示常量，但是不能保证常量是独特的

//注意：Symbol.for()和Symbol.keyFor()
//Symbol.for()类似于单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。
//Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记。

//Symbol.for()用于创建时，和Symbol()的不同：
//1. Symbol.for()会登记，所以可以使用Symbol.keyFor()找到，而Symbol()不会
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//2.参数一致时，Symbol.for()创建的变量相等，Symbol()创建的不相等
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2); // true