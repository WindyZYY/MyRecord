//Generator有两个区分于普通函数的部分
//一是在function后面函数名之前有个*(表明是Generator函数)
//二是函数内部有yield表达式（定义函数内部的状态）
function* func(){
    console.log("one");
    yield '1';
    console.log("two");
    yield '2';
    console.log("three");
    return '3';
}
//执行机制
//调用 Generator 函数和调用普通函数一样，在函数名后面加上()即可，但是 Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，所以要调用遍历器对象Iterator 的 next 方法，指针就会从函数头部或者上一次停下来的地方开始执行。
var f = func();
console.log(f.next());//{ value: '1', done: false }
console.log(f.next());//{ value: '2', done: false }
console.log(f.next());//{ value: '3', done: true }
console.log(f.next());//{ value: undefined, done: true }
//f.next()返回一个简单对象{value: , done: }，可以通过f.next().value和f.next().done单独获得
//第一次调用，运行到yield '1'处暂停，这是函数还没有执行完，所以是false
//当执行到第三次的时候，函数return了一个数，标志执行完，所以是true
//return之后就算还有yield也无效，如果没有return，函数顺序执行完之后done也会是true
//第四次调用时，函数已经执行完，其实没有意义。

function* g(){
    var o=1;
    var a=yield o++;
    console.log('a='+a);
    var b = yield o++;
}
var gen=g();
console.log(gen.next());//{ value: 1, done: false }
console.log('--------');
console.log(gen.next(11));//{ value: 2, done: false }在这之前，还打出了a=11

//-----在a=11前面，证明第一个next()只会输出当前yield后面的那个值
//yield是个暂停符，而不是找到下一个yield为止
//yield与return区别：yield可以记忆为止，而return不会，所以return只能有一个，yield可以有多个
//yield只用于generator函数，如果function*里面还定义了别的函数则不可使用，return可以用在普通函数中
//yield如果参与运算就要用括号括起来
// console.log(3+(yield 4));//7

//用yield赋值，永远是undefined，有next()方法后，返回的就是next的参数值
//next方法每次覆盖的一定是undefined，在next没有参数的时候，进行xx=yield oo没有意义，因为xx一定是undefined
//意义是可以向函数内部注入值，从而调整函数的行为
//第一个next()可以有参数吗？无意义，因为前面没有yield语句

function* foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for(let v of foo()){
    console.log(v);
}//1 2 3 4 5
//for...of与next区别：
//1. next每次输出都是一个对象，而foo..of返回的是next().value
//2.for...of运行到return会结束，不会输出return的value
//3.当使用next()一直输出generator对象时，必须先把函数赋值给某个对象，不然会一直输出第一个对象的值

function* fibonacci(){
    let [prev,curr] = [0,1];
    for(;;){
        [prev,curr] = [curr,prev+curr];
        yield curr;
    }
}
console.log("fibonacci");
for(let n of fibonacci()){
    if(n>10)
        break;
    console.log(n);    
}

//yield*调用其他gen函数
