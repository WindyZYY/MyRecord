//js继承的六种方式

//1. 原型链
function superType(){
    this.name='father';
    this.c=['a','b','c'];
}
superType.prototype.getName=function(){
    console.log(this.name);
}
function subType(){
    // this.name='son'; 加上这句x.getName会输出son
}
//实质：把superType的实例赋值给subType的原型（实例包含指向原型对象的指针）
//于是superType中的所有属性和方法，subType都有了。
subType.prototype = new superType();
console.log('原型链');
var x = new subType();
var y = new subType();
y.name="s";
y.c.push('d');
y.getName();//输出s
x.getName();//输出father
console.log(y.c);//[ 'a', 'b', 'c', 'd' ]
console.log(x.c);//[ 'a', 'b', 'c', 'd' ]

//重写superType的方法
subType.prototype.getName = function(){
    console.log('son');
}
x.getName();//输出son

//原型链的缺点，所以其实实践过程中很少使用
//1.所有subType的实例共享一个superType的引用类型属性
//2.创建subType时没办法想superType传参

//2. 借助构造函数（经典继承）
function Person(name){
    this.name=name;
    this.colors= ['red','blue','green'];
}
Person.prototype.getName=function(){
    console.log(this.name);
}
function Child(){
    Person.call(this,'zyy');//调用父类的构造函数实现继承效果
}
var child1 = new Child();
var child2 = new Child();
console.log('构造函数');
child1.colors.push('white');
console.log(child1.name);
// child2.getName();不能通过
console.log(child1.colors);//['red', 'blue', 'green', 'yellow']
console.log(child2.colors);//['red', 'blue', 'green']
//优点：避免了引用类型的属性被所有实例共享，可以在Child中向parent传参
//缺点：只是子类的实例，不是父类的实例，方法都在构造函数中定义，每次创建实例都会创建一遍方法

//3. 组合继承
//组合原型链继承和借用构造函数继承
//使用原型链实现对原型方法的继承，而通过借用构造函数来实现对实例属性的继承
function Parent(name){
    this.name=name;
    this.arr=['red','blue'];
}
Parent.prototype.getName=function(){
    console.log(this.name);
}
function child(name,age){
    Parent.call(this,name);//第二次调用Parent()
    this.age=age;
}
child.prototype = new Parent();//第一次调用Parent()
var c1=new child('hhh',18);
var c2=new child('yyy',19);
console.log('组合继承');
c1.getName();//hhh
c2.getName();//yyy
console.log(c1.age);//18
console.log(c2.age);//19
c1.arr.push('green');
console.log(c1.arr);//['red', 'blue', 'green']
console.log(c2.arr);//['red', 'blue']
console.log(c1 instanceof child);//true
console.log(c1 instanceof Parent);//true
//优点：融合了原型继承和构造函数继承的优点，是最常用的继承方式
//缺点：调用了两次父类函数

//4. 原型式继承
function createObj(o){
    function f(){}//在内部创建一个临时构造函数，
    f.prototype = o;//将传入的对象作为这个构造函数的原型，
    return new f();//最后返回这个临时类型的新实例
}

var person={//父类
    name:'xiao',
    friend:['ddd','ccc']
};

var anotherPerson = createObj(person);
var anotherPerson2 = createObj(person);
console.log('原型式继承');
console.log(anotherPerson);//{}
anotherPerson.name='hscod';//给anotherPerson添加了name值，但是并没有修改原型上的name值
anotherPerson.age="18";//还可以增加新的属性
anotherPerson.friend.push('aaa');
console.log(anotherPerson);//{name: 'hscod',age:'18}
anotherPerson2.friend.push('bbb');
console.log(anotherPerson2);//{}
console.log(anotherPerson2.name);//xiao
console.log(person.friend);//[ 'ddd', 'ccc', 'aaa', 'bbb' ]
//缺点和原型链继承一样，所有的引用类型会被共享

//5. 寄生式继承
//创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
//可以理解成在原型式继承的基础上新增一些函数或属性
console.log('寄生式继承');
var ob1=createObj(person);
var ob2=Object.create(person);//ES5的规范写法
console.log(ob1.name);//xiao
console.log(ob2.name);//xiao

function createSon(s){//子类
    var newob=createObj(s);//创建对象
    newob.sayName = function(){//增强对象
        console.log(this.name);
    }
    return newob;//指定对象
}

var p1=createSon(person);
p1.sayName();//xiao
//缺点：和构造函数一样，每次创建对象都会创建一遍方法

//6. 寄生组合式继承（最理想）
//子类构造函数复制父类的自身属性和方法，子类原型只接受父类的原型属性和方法
function pa(name){
    this.name=name;
    this.attr=['a','b'];
}
pa.prototype.speak = function(){
    console.log('my name is '+this.name);
}
function ch(name,age){
    pa.call(this,name);
    this.age=age;
}
function createOb(o){
    function F(){};
    F.prototype =o;
    return new F();
}
//Child.prototype = new Parent();
function inheritPrototype(child,parent){
    var prototype = createOb(parent.prototype);//创建对象
    prototype.constructor=child;//增强对象
    child.prototype=prototype;//指定对象
}

inheritPrototype(ch,pa);
console.log('寄生组合式');
var ch1=new ch('zyy','18');
console.log(ch1);//ch { name: 'zyy', attr: [ 'a', 'b' ], age: '18' }
console.log(ch1 instanceof ch);//true
console.log(ch1 instanceof pa);//true
//优点：只调用了一次pa构造函数，因此避免了在pa.prototype上面创建不必要的多余的属性。