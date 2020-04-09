const readline=require('readline')

r1=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.on('line',function(data){
    //获取输入
    var inputs=data.trim().split(' ');

    //处理
    var result = deal(inputs);

    //输出结果
    console.log(result);
});

function deal(inputs){
    var result = '';
    //dosomething
    return result;
}
