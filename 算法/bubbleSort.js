const readline=require('readline');
var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on('line',function(input){
    var inputs=input.trim().split(' ');

    var result=bubbleSort(inputs);

    console.log(result);
})


function bubbleSort(arr){
    var len=arr.length;
    for(var i=0;i<len-1;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}