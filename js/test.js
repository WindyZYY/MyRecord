// async function superBaby(name){
//         console.log('I am '+name);

//         this.sleep = function(time){
//             setInterval(eat=function(fruit){
//                 console.log("Start eating after "+time+" seconds");
//                 console.log("Eating "+fruit);
//             },time*1000);
//         };
//         superBaby.prototype.sleepFirst=function(){

//         }
        
// }

var superBaby = (function () {
    function superBaby(name){
        this.name=name;
        console.log('I am '+this.name);
    }
    superBaby.prototype.sleep=function(){
        
    }
    superBaby.prototype.sleepFirst=function(){

    }
})();
var p=superBaby('tom');
p.sleep(10).eat('apple');