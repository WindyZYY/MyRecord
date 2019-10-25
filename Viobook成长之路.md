# Viobook成长之路

##### 1. tiddlywiki

- 下载

  > npm install -g tiddlywiki
  >
  > tiddlywiki --version

- 打开

  > tiddlywiki mynewwiki --init server
  >
  > tiddlywiki mynewwiki --listen（好像--server也可以）

- tiddlywiki

  ```tiddlywiki
  //multi-line
  <<< .tc-big-quote
  quoted text
  >>>cited name
  
  //单行
  > quoted text
  ```

  ```tiddlywiki
  * list1
  ** list2
  *# 1.text
  *# 2.text
  *## 2.1 text
  ```

  ```tiddlywiki
  ​```
  code
  ​```
  ```

  ```tiddlywiki
  //Definition
  ; Term beding defined
  : Definition of that term
  ```

  ```tiddlywiki
  //formatting
  `something`   //实现md中<kbd>
  ''bold''
  //italic//
  __underscore__
  ^^superscript^^
  ,,subscript,,
  ~~strikethrough~~
  ```

  ```tiddlywiki
  ! heading level 1
  !! heading level 2
  !!.myStyle heading has the class `mystyle`
  ```

  ```
  三个双引号标记整段，就是添加换行<br>
  三根短横就是一个水平线
  用两个@@来添加CSSstyle
  ```

  ```tiddlywiki
  [img[src]]
  [img width=32 class="tc-image"[src]]
  ```

  ```
  [[链接文本|url]]
  ~ 取消链接
  ```

  ```
  制作表格
  |!表头|!加粗|
  |内|容|
  |靠左 | 靠右|
  | 居中 |++ 还是居中但是+号也被打印了 ++|
  |^top left |^ top center |
  |middle left |,bottom left |
  ```



##### 2. gulp

- 安装

  > 检查node、npm和npx是否正确安装
  >
  > <kbd>node --version</kbd>&<kbd>npm--version</kbd>&<kbd>npx --version</kbd>
  >
  > 开始安装
  >
  > <kbd>npm install--global gulp-cli</kbd>
  >
  > 创建项目目录
  >
  > <kbd>npx mkdir my-project</kbd>
  >
  > 