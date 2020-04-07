//Map对象保存键值对。任何值（对象或者原始值）都可以作为一个键或者一个值
// Maps 和 Objects 的区别：
// a.一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
// b.Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
// c.Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
// d.Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

{
    var myMap=new Map();
    var keyString="a string";
    myMap.set(keyString,"keyvalue");
    console.log(myMap.get(keyString));//keyvalue
    console.log(myMap.get("a string"));//keyvalue
}
//keyString还可以替换成keyObj,keuFunc,NaN(NaN和任何值包括自己都不相等)
myMap.set(NaN,"not a number");
console.log(myMap.get(NaN));//not a number
var otherNaN=Number("foo");
console.log(myMap.get(otherNaN));//not a number

//Map的迭代
console.log("Map的迭代");
myMap.set(0,'zero');
myMap.set(1,'one');
for(var [key,value] of myMap){
    console.log(key+'='+value);
}
for(var [key,value] of myMap.entries()){
    console.log(key+'='+value);
}
for(var key of myMap.keys()){
    console.log(key);
}
for(var value of myMap.values()){
    console.log(value);
}
myMap.forEach(function(value,key){
    console.log(key+'='+value);
},myMap);

//Map对象的操作
console.log('Map对象的操作');
//Map与Array的转换
var kvArray=[["key1","value1"],["key2","value2"]];
var Map2 = new Map(kvArray);//Map构造函数可以将一个二维键值对数组转换成一个Map对象
var outArray = Array.from(Map2);//使用Array.from函数可以将一个Map对象转换成一个二位键值对数组
console.log(Map2);//Map { 'key1' => 'value1', 'key2' => 'value2' }
console.log(outArray);//[ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]
//Map的克隆
var Map3=new Map(Map2);//复制Map2到Map3
console.log(Map2 === Map3);//false。Map对象构造函数生成实例，迭代出新的对象
console.log(Map3);//Map { 'key1' => 'value1', 'key2' => 'value2' }

var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);
console.log(merged);//Map { 1 => 'uno', 2 => 'dos', 3 => 'three' }