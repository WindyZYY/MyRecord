// 解构赋值是对赋值运算符的扩展。
// 他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
// 这种方法在代码书写上简洁且易读，语义也清晰明了，同时方便了复杂对象中数据字段获取

//在解构中，有下面两部分参与
//解构的源，解构赋值表达式的右边部分
//解构的目标，解构赋值表达式的左边部分

//数组模型的解构
console.log('数组模型的解构');
let [a,b,c]=[1,2,3];
console.log('基本：'+a+b+c);//a=1 b=2 c=3,输出：123

let [d,[e,[f]]]=[4,[5,[6]]];//不能再使用abcf
console.log('可嵌套：'+d+e+f);//d=4 e=5 f=6,输出：456

let [g,,h] = [7,7,8];
console.log('可忽略：'+g+h);//g=7 h=8 输出：78

let [i=1,j]=[];
console.log('不完全解构：'+i+j);//i=1 j=undefined

let [k,...l] = [1,2,3];
console.log('剩余运算符：'+k+l);//k=1,l=[2,3]

let [m,n,o,p,q]='hello';//在数组的解构中，结构目标为可遍历对象，可进行解构估值
console.log('字符串等：'+m+' '+n+' '+o+' '+p+' '+q);//输出：h e l l o

let [r=2]=[undefined];
console.log(r);//a=2 当解构模式有匹配结果，且匹配结果是undefined时，会触发默认值作为返回结果。这里的默认值就是2

// let [a=3,b=a]=[]; //a=3,b=a=3(a,b都匹配undefined)
// let [a=3,b=a]=[1]; //a=1,b匹配undefined,触发b=2=3
// let [a=3,b=a]=[1,2]; //a=1 b=2


//对象类型的解构
console.log('对象类型的解构');
let {foo,bar}={foo:'aaa',bar:'bbb'};//foo='aaa' bar='bbb'
console.log(foo+" "+bar);

let {baz:fo}={baz:'ddd'};
console.log(fo);//fo='ddd'

let obj={p:['hello',{y:'world'}]};
let {p:[x,{y}]}=obj;
console.log(x+y);
// let {p:[x,{}]}=obj;
// console.log(x);

let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj;
// x = undefined
// y = 'world

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
// a = 10
// b = 20
// rest = {c: 30, d: 40}

let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;