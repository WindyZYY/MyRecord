Animal:
function Animal(){
    this.name = "Animal";
    this.showName = function(){
        console.log(this.name);
    }
}

Cat:

function Cat(){

    this.name = "Cat";
    this._super=Cat.prototype;

    this.showName1 = function(){
        console.log(this.name); 
    }
    
    this.showName2 = function(){
        console.log(this.name); 
    } 
 
    this.showName3 = function(){
        console.log(this._super.name + "=>" + this.name); 
    }
}

Cat.prototype = new Animal();
var cat = new Cat();
console.log(cat instanceof Animal ); // 得到：true
cat.showName1();     // 得到："Cat" (需要读到Cat中的name属性) 
cat.showName2();    //  得到：”Animal" (需要读到Animal中的name属性) 
cat.showName3();    //得到：”Animal" => "Cat" (需要同时读到Cat中的name和Animal中的name)
