//Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：
// +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
// undefined 与 undefined 是恒等的，所以不重复；
// NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);//Set(2){1,5}这里体现了值得唯一性
mySet.add("someText");//Set(3){1,5,"someText"}这里体现了类型得多样性

var o ={a:1,b:2};
mySet.add(o);
mySet.add({a:1,b:2});
//Set(5){1,5,"someText",{...},{...}}这里体现了对象之间引用不同不恒等，即使值相同，Set也能存储

//类型转换
var mySet2 = new Set(["value1","value2","value3"]);
var myArray=[...mySet2];//用...操作符将set转array
var mySet3=new Set('hello');//Set(4){"h","e","l","o"}
console.log(mySet2);
console.log(mySet3);
//注：Set中toString方法不能将Set转换成String

//Set对象作用
var mySet1 = new Set([1,2,3,4,4]);//数组去重
console.log([...mySet1]);//[1,2,3,4]

var a =new Set([1,2,3]);
var b =new Set([4,3,2]);
var union=new Set([...a, ...b]);//{1,2,3,4}
console.log(union);

var interset = new Set([...a].filter(x=>b.has(x)));
console.log(interset);//{2,3}

var difference = new Set([...a].filter(x=>!b.has(x)));
console.log(difference);//{1}