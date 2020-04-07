class parent{
    constructor(value){
        this.val=value;
    }
    getValue(){
        console.log(this.val);
    }
}
class child extends parent{
    constructor(value){
        super(value);//可以看成parent.call(this,value);
        this.val=value+1;
    }
}
let ch=new child(1);
ch.getValue();//2 
console.log(ch instanceof parent);