//replace函数接受两个参数,第一个参数为字符串或正则表达式，第一个参数同样可以接受一个字符串，还可能是一个函数。

//1. 第二个参数为子字符串
var str1="boy & girl".replace(/(\w+)\s&\s(\w+)/g,"$2 & $1");//girl & boy
console.log(str1);
//$i (i:1-99) : 表示从左到右正则子表达式所匹配的文本。

var str2="boy".replace(/\w+/g,"$&-$&");//boy-boy
console.log(str2);
//$&:表示与正则表达式匹配的全文本

var str3="javascript".replace(/scriptt/,"$& != $`");//javascript != java
console.log(str3);
//$`(`:切换技能键)：表示匹配字符串的左边文本。

var str4="javascript".replace(/java/,"$&$' is ");//javascript is script
console.log(str4);
//$’(‘:单引号)：表示匹配字符串的右边文本。

var str5="javascript".replace(/java/,"$& is $$");//java is $script
console.log(str5);
//$$：表示$转移。

//2.第二个参数为函数
// 在ECMAScript3推荐使用函数方式，实现于JavaScript1.2.当replace方法执行的时候每次都会调用该函数，返回值作为替换的新值。
// 函数参数的规定：
// 第一个参数为每次匹配的全文本（$&）。
// 中间参数为子表达式匹配字符串，个数不限.( $i (i:1-99))
// 倒数第二个参数($i后面的）为匹配文本字符串的匹配下标位置。
// 最后一个参数表示字符串本身。

String.prototype.capitalize = function(){
    return this.replace(/(^|\s)([a-z])/g,function(a,k,v){
        return k+v.toUpperCase();
    });
}
console.log('i am a girl'.capitalize());//字符串首字母大写 I Am A Girl

var s = "张三56分， 李四74分， 王五92分， 赵六84分";
var a = s.match(/\d+/g);
var avg = a.reduce(function(obj, item){ return obj + parseFloat(item);},0) / a.length; 
var result = s.replace(/(\d+)分/g, function(){
 
            var n = parseFloat(arguments[1]);
 
            return n + "分" + "(" + ((n > avg) ? ("超出平均分" + (n - avg)) :
 
                        ("低于平均分" + (avg - n))) + "分)";
 
});
console.log(result);