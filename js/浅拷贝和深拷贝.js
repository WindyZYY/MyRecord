//浅拷贝
let a = {
    age:1
}
let b=Object.assign({},a);
a.age=2;
console.log(a.age+' '+b.age);//2 1
console.log(b);//{age:1}

let c={...a};
console.log(c);//{ age: 2 }

//深拷贝
{
    let a={
        age:3,
        jobs:{
            first: 'FE'
        }
    }
    let b={...a};
    a.jobs.first='native';
    console.log(b);//{ age: 3, jobs: { first: 'native' } }

    //使用深拷贝
    a.jobs.first='FE';
    let c=JSON.parse(JSON.stringify(a));
    a.jobs.first='native2';
    console.log(c);//{ age: 3, jobs: { first: 'FE' } }
    console.log(a);//{ age: 3, jobs: { first: 'native2' } }
}