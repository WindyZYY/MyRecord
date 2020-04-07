const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    const that = this
    this.state = PENDING

    //value 变量用于保存resolve或者reject中传入的值
    this.value=null

    //用于保存then中的回调，因为当执行完promise时状态可能还是等待中，需要把回调函数保存起来
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value){
        if(that.state === PENDING){
            that.state = RESOLVED
            that.value = value

            //遍历回调数组并执行
            that.resolvedCallbacks.map(cb=>cb(that.value));
        }
    }

    function reject(value){
        if(that.state === PENDING){
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb=>cb(that.value));
        }
    }

    try{
        fn(resolve,reject)
    }catch(e){
        reject(e)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected){
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled :v=>v
    onRejected = typeof onRejected === 'function' ? onRejected: e=>{throw e}

    if(this.state===PENDING){
        this.resolvedCallbacks.push(onFulfilled)
        this.rejectedCallbacks.push(onRejected)
    }
    if(this.state===RESOLVED){
        onFulfilled(that.value);
    }
    if(this.state=REJECTED){
        onRejected(that.value);
    }
}