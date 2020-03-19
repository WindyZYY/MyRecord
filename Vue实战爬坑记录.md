# Vue实战爬坑记录

（小渣渣一枚，有很多沙雕错误，记录一下备忘）

##### 1. Vue 组件的属性有些加<kbd>:</kbd>，有些不加？

> Ans: 加了冒号的就表示后面是个变量或者表达式，不加的就是常量。

##### 2. 注册组件的方法

###### 首先确保，你要注册的组件是暴露出去的，即

```
export default{
	name: 'componentName'
}
```

- 全局组件

  先写好一个组件，然后在main.js文件内写

  ```
  import  componentName  from 'url'（注意是相对地址）
  
  Vue.component('lableName',componentName)
  ```

  然后再在需要使用该组件的vue文件中直接使用就好啦

  ```
  <lableName></lableName>
  ```

- 局部组件

  在需要引入的vue文件内引入，然后直接使用就行了

  ```
  import componentName from 'url'（也是相对地址）
  export default{
  	components: {
  		'lableName': componentName
  	}
  }
  <lableName></lableName>
  ```

##### 3. 注册全局组件之后页面无显示？

##### 4. 数组的函数操作

> push()
>
> 我用的是push来增加数组的元素，这是最常用的

##### 5. 动态组件

一直显示不出来，后来发现是使用computed没有及时更新v-bind绑定的属性。

原因是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。

后来把属性值的改变方法写进methods就好了

（不知道什么原因

##### 6. router-view 的问题

- 页面重叠
- 内部不能用img

##### 7. 实现动态组件



##### 8. LinkButton的属性修改（easyUI）

##### 9. 小卡片尖角的实现

##### 10. div和textarea编辑时的边框设置

```
outline: none;
```

##### 11. 鼠标hover时改变按钮的文本

```
<template>
	<button><span>原先的文本</span></button>
</template>
<style>
button:hover span{
	display:none;
}
button:hover:before{
	content:'替换的文本'
}
</style>
```

> before选择器可以向选定的元素前插入内容，使用content属性来指定要插入的内容。还可以指定其他样式。
>
> span用来控制原来的内容的显示与隐藏。

##### 12. 居中（水平垂直都居中）

```
  .centerPos {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
```

##### 13.VScode常用快捷键

```
ctrl+c/x/v/s/a太常见了就不说了
ctrl+/ 单行注释
ctrl+shift+a  多行注释
```

##### 14. 鼠标悬浮切换图片

```
<template>
	<img :src="myImg">
<template>
<script>
export default{
	name:'myName',
	data(){
		return{
			myImg: require('相对路径pic1'),
			img-1: require('相对路径pic1'),
			img-2: require('相对路径pic2')
		}
	},
	methods:{
		changePic:function(){
			this.$set(this.$data,'myImg',this.pic2)
		},
		changePicBack:function(){
			this.$set(this.$data,'myImg',this.pic1)
		}
	}
}
</script>
```

##### 15. Vue中onclick不能用，只能用@click？