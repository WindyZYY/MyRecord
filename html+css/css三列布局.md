1. float布局
```
    <style>
    div{
        min-height:100px;
    }
    .left{
        float:left;
        width:300px;
        background:red;
    }
    .right{
        float:right;
        width:300px;
        background:blue;
    }
    .center{
        background:yellow;
    }
    </style>

    <div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="center">这是三栏布局的浮动解决方案</div>
    </div>
```
这种布局方式要先写浮动部分，再写中间块，不然右浮动块会掉到下一行。
优点就是比较简单，兼容性也比较好，但是浮动元素脱离文档流要做清除浮动，处理不好就会造成父元素塌陷等问题。缩小到一定程度（center中的字宽度大于div宽度时）三列布局会破坏

2. 绝对布局
```
    <style>
    div{
        position:absolute;
        min-height:100px;
    }
    .left{
        left:0;
        width:300px;
        background:red;
    }
    .right{
        right:0;
        width:300px;
        background:blue;
    }
    .center{
        right:300px;
        left:300px;
        background:yellow;
    }
    </style>

    <div>
        <div class="left"></div>
        <div class="center">这是三栏布局的绝对定位解决方案</div>
        <div class="right"></div>
    </div>
```
优点：快捷、设置很方便，也不容易出错（记得设置父元素）
缺点：脱离文档流，后代元素也是脱离文档流的，高度未知的时候会有问题

3. flexbox布局
```
    <style>
    .main{
        display:flex;
    }
    .left{
        width:400px;
        background:red;
    }
    .center{
        backgrounf:yellow;
        flex:1;
        work-break:break-word;
    }
    .right{
        width:400px;
        background:blue;
    }
    </style>
```
中间的flex: 0 1 auto，缩小倍数一定要是1，不然会被子元素撑开。
主要是兼容性问题 IE10开始支持

4. table布局
```
    <style>
    .main{
        width:100%;
        display:table;
    }
    .left, .center, .right{
        display:table-cell;
    }
    .left{
        width:300px;
        background:red;
    }
    .right{
        width:300px;
        background:blue;
    }
    .center{
        background:yellow;s
    }
    </style>

   <article class="main">
        <div class="left">左</div>
        <div class="center">中
            <h2>table布局</h2>
        </div>
        <div class="right">右</div>
    </article>
```
兼容性比较好，但是无法设置栏边距，对seo不友好，当其中一个单元格高度超出时，两边的单元格也会一起变高，有时候这不是我们想要的

5. grid网格布局
```
    <style>
        .div{
            width:100%;
            display:grid;
            grid-template-rows:100px;
            grid-template-columns:300px auto 300px;
        }
    </style>
```
兼容性不太好，IE10+上支持，而且仅支持部分属性

这五种当中只有table和flex可以实现左右高度变化和中间高度变化同步