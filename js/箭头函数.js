//箭头函数有两种格式，一种是只包含一个表达式连{}和return都省去了
x => x*x
//上面的相当于一个匿名函数
// function (x) {
//     return x*x;
// }

//还有一种可以包含多条语句，这时候就不能省略{}和return了
// (x,y) => {
//     if(x>0){
//         return x+y;
//     }else{
//         return y-x;
//     }
// }

//无参数() => 3.14
//可变参数(x,y,...rest) => {
//     var i,sum = x+y;
//     for(i=0;i<rest.length;i++){
//         sum+=rest[i];
//     }
//     return sum;
// }

//返回对象 x=>({foo:x})

//箭头函数和匿名函数的区别：箭头函数内部的this是词法作用域（外层调用者），由上下文确定
var obj = {
    birth:1990,
    getAge:function(){
        var b=this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
}
console.log(obj.getAge());//2020-1990=30

//由于this在箭头函数中已经按照词法作用域绑定了，所以用call()或者apply()调用箭头函数时，没办法绑定this，即传入的第一个参数被忽略
{
    var obj ={
        birth:2000,
        getAge:function(year){
            var b=this.birth;//2000
            var fn = (y)=>y-this.birth;//this.birth仍然是2000
            // var fn = function(y) {return  y-this.birth};//this.birth是1990
            return fn.call({birth:1990},year);
        }
    }
    console.log(obj.getAge(2020));
}

//练习
'use strict'
var arr = [10,20,1,2];
arr.sort((x,y)=>{
    return x>y;//表示递增排序
});
console.log(arr);//[1,2,10,20]