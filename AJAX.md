# AJAX

AJAX=Asynchronous Javascript and XML(异步的js和xml)

AJAX不是新的编程语言，而是一种使用现有标准的新方法。

AJAX最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

AJAX不需要任何浏览器插件，但需要用户允许js在浏览器上执行。



#### 1. 什么是AJAX？

AJAX是一种用于创建快速动态网页的技术，通过在后台与服务器进行少量数据交换，使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

使用XHTML+CSS来标准化呈现；
使用XML和XSLT进行数据交换及相关操作；
使用XMLHttpRequest对象与Web服务器进行异步数据通信； 
使用Javascript操作Document Object Model进行动态显示及交互； 
使用JavaScript绑定和处理所有数据。

#### 2. 工作原理

相当于在client和server中间加了一个中间层（AJAX引擎），使client和server响应异步化。并不是所有用户请求都提交给服务器，一些数据验证和数据处理等交给AJAX引擎自己来做，只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。

Ajax核心有JavaScript、XMLHTTPRequest、DOM对象组成，通过XMLHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用JavaScript来操作DOM而更新页面。其中最关键的一步就是从服务器获得请求数据。

（1）XMLHttpRequest对象

Ajax最大的特点就是无刷新更新页面，而这主要得益于XMLHTTP组件XMLHttpRequest对象

XMLHttpRequest对象属性：

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 状态改变的事件触发器，每个状态改变时都会触发这个事件处理器，通常会调用一个JavaScript函数。 |
| readyState         | 请求的状态。有5个可取值：0=未初始化，1=正在加载，2=已加载，3=交互中，4=完成 |
| responseText       | 服务器的响应，返回数据的文本                                 |
| responseXML        | 服务器的响应，返回数据的兼容DOM的XML文档对象，这个对象可以解析为一个DOM对象 |
| responseBody       | 服务器返回的主题（非文本格式）                               |
| responseStream     | 服务器返回的数据流                                           |
| status             | 服务器返回的HTTP状态码（404=文件未找到，200=OK）             |
| statusText         | 服务器返回的状态文本信息，HTTP状态码对应的文本               |

XMLHttpRequest对象方法：

| 方法                                                       | 描述                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| abort()                                                    | 停止当前请求                                                 |
| getAllResponseHeaders()                                    | 把HTTP请求的所有响应首部作为键/值对返回                      |
| getResponseHeader("header")                                | 返回指定首部的串值                                           |
| open("method","URL",[asyncFlag],["userName"],["password"]) | 建立对服务器的调用。method参数可以时GET、POST或者PUT。url参数可以是相对或者绝对url。这个方法还包括三个可选参数，是否异步，用户名，密码 |
| send(content)                                              | 向服务器发送请求                                             |
| setRequestHeader("header", "value")                        | 将指定首部设置为所提供的值。在设置任何首部之前必须先调用open()，使用POST方法，把设置的Header和请求一起发送 |

(2). JavaScript
JavaScript是一在浏览器中大量使用的编程语言。
(3). DOM Document Object Model
DOM 是给HTML和XML文件使用的一组API。它提供了文件的结构表述，让你可以改变其中的內容及可见物。其本质是建立网页与Script或程序语言沟通的 桥梁。所有WEB开发人员可操作及建立文件的属性、方法及事件都以对象来展现（例如，document就代表“文件本身“这个对像，table对象则代表 HTML的表格对象等等）。这些对象可以由当今大多数的浏览器以Script来取用。一个用HTML或XHTML构建的网页也可以看作是一组结构化的数 据，这些数据被封在DOM（Document Object Model）中，DOM提供了网页中各个对象的读写的支持。
(4). XML
可扩展的标记语言（Extensible Markup Language）具有一种开放的、可扩展的、可自描述的语言结构，它已经成为网上数据和文档传输的标准,用于其他应用程序交换数据 。
(5). 综合
Ajax引擎，实际上是一个比较复杂的 JavaScript应用程序，用来处理用户请求，读写服务器和更改DOM内容。JavaScript的Ajax引擎读取信息，并且互动地重写DOM，这 使网页能无缝化重构，也就是在页面已经下载完毕后改变页面内容，这是我们一直在通过JavaScript和DOM在广泛使用的方法，但要使网页真正动态起 来，不仅要内部的互动，还需要从外部获取数据，在以前，我们是让用户来输入数据并通过DOM来改变网页内容的，但现在，XMLHTTPRequest，可 以让我们在不重载页面的情况下读写服务器上的数据，使用户的输入达到最少。
Ajax使WEB中的界面与应用分离（也可以说是数据与呈现分离），而在以前两者是没有清晰的界限的，数据与呈现分离的分离，有利于分工合作、减少 非技术人员对页面的修改造成的WEB应用程序错误、提高效率、也更加适用于现在的发布系统。也可以把以前的一些服务器负担的工作转嫁到客户端，利于客户端 闲置的处理能力来处理。

#### 3. AJAX的优缺点

**(1).AJAX的优点**

- 无刷新更新数据。
  AJAX最大优点就是能在不刷新整个页面的前提下与服务器通信维护数据。这使得Web应用程序更为迅捷地响应用户交互，并避免了在网络上发送那些没有改变的信息，减少用户等待时间，带来非常好的用户体验。

- 异步与服务器通信。
  AJAX使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。优化了Browser和Server之间的沟通，减少不必要的数据传输、时间及降低网络上数据流量。

- 前端和后端负载平衡。
  AJAX可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，AJAX的原则是“按需取数据”，可以最大程度的减少冗余请求和响应对服务器造成的负担，提升站点性能。

- 基于标准被广泛支持。
  AJAX 基于标准化的并被广泛支持的技术，不需要下载浏览器插件或者小程序，但需要客户允许JavaScript在浏览器上执行。随着Ajax的成熟，一些简化 Ajax使用方法的程序库也相继问世。同样，也出现了另一种辅助程序设计的技术，为那些不支持JavaScript的用户提供替代功能。

- 界面与应用分离。
  Ajax使WEB中的界面与应用分离（也可以说是数据与呈现分离），有利于分工合作、减少非技术人员对页面的修改造成的WEB应用程序错误、提高效率、也更加适用于现在的发布系统。

  **(2).AJAX的缺点**

- AJAX干掉了Back和History功能，即对浏览器机制的破坏。
  在动态更新页面的情况下，用户无法回到前一个页面状态，因为浏览器仅能记忆历史记录中的静态页面。一个被完整读入的页面与一个已经被动态修改过的页面之间的差别非常微妙；用户通常会希望单击后退按钮能够取消他们的前一次操作，但是在Ajax应用程序中，这将无法实现。
  后 退按钮是一个标准的web站点的重要功能，但是它没法和js进行很好的合作。这是Ajax所带来的一个比较严重的问题，因为用户往往是希望能够通过后退来 取消前一次操作的。那么对于这个问题有没有办法？答案是肯定的，用过Gmail的知道，Gmail下面采用的Ajax技术解决了这个问题，在Gmail下 面是可以后退的，但是，它也并不能改变Ajax的机制，它只是采用的一个比较笨但是有效的办法，即用户单击后退按钮访问历史记录时，通过创建或使用一个隐 藏的IFRAME来重现页面上的变更。（例如，当用户在Google Maps中单击后退时，它在一个隐藏的IFRAME中进行搜索，然后将搜索结果反映到Ajax元素上，以便将应用程序状态恢复到当时的状态。）
  但是，虽然说这个问题是可以解决的，但是它所带来的开发成本是非常高的，并与Ajax框架所要求的快速开发是相背离的。这是Ajax所带来的一个非常严重的问题。
  一 个相关的观点认为，使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中。该问题的解决方案也已出现，大部分都使用URL片断标识符（通常被称为 锚点，即URL中#后面的部分）来保持跟踪，允许用户回到指定的某个应用程序状态。（许多浏览器允许JavaScript动态更新锚点，这使得Ajax应 用程序能够在更新显示内容的同时更新锚点。）这些解决方案也同时解决了许多关于不支持后退按钮的争论。

- AJAX的安全问题。
  AJAX 技术给用户带来很好的用户体验的同时也对IT企业带来了新的安全威胁，Ajax技术就如同对企业数据建立了一个直接通道。这使得开发者在不经意间会暴露比 以前更多的数据和服务器逻辑。Ajax的逻辑可以对客户端的安全扫描技术隐藏起来，允许黑客从远端服务器上建立新的攻击。还有Ajax也难以避免一些已知 的安全弱点，诸如跨站点脚步攻击、SQL注入攻击和基于Credentials的安全漏洞等等。

- 对搜索引擎支持较弱。
  对搜索引擎的支持比较弱。如果使用不当，AJAX会增大网络数据的流量，从而降低整个系统的性能。

- .破坏程序的异常处理机制。
  至 少从目前看来，像Ajax.dll，Ajaxpro.dll这些Ajax框架是会破坏程序的异常机制的。关于这个问题，曾在开发过程中遇到过，但是查了一 下网上几乎没有相关的介绍。后来做了一次试验，分别采用Ajax和传统的form提交的模式来删除一条数据……给我们的调试带来了很大的困难。

- 违背URL和资源定位的初衷。
  例如，我给你一个URL地址，如果采用了Ajax技术，也许你在该URL地址下面看到的和我在这个URL地址下看到的内容是不同的。这个和资源定位的初衷是相背离的。

- AJAX不能很好支持移动设备。
  一些手持设备（如手机、PDA等）现在还不能很好的支持Ajax，比如说我们在手机的浏览器上打开采用Ajax技术的网站时，它目前是不支持的。

- 客户端过肥，太多客户端代码造成开发上的成本。
  编写复杂、容易出错 ；冗余代码比较多（层层包含js文件是AJAX的通病，再加上以往的很多服务端代码现在放到了客户端）；破坏了Web的原有标准。



#### 4. AJAX的使用场景

(1).注意点
Ajax 开发时，网络延迟——即用户发出请求到服务器发出响应之间的间隔——需要慎重考虑。不给予用户明确的回应，没有恰当的预读数据，或者对 XMLHttpRequest的不恰当处理，都会使用户感到延迟，这是用户不希望看到的，也是他们无法理解的。通常的解决方案是，使用一个可视化的组件来 告诉用户系统正在进行后台操作并且正在读取数据和内容。
(2).Ajax适用场景
<1>.表单驱动的交互
<2>.深层次的树的导航
<3>.快速的用户与用户间的交流响应
<4>.类似投票、yes/no等无关痛痒的场景
<5>.对数据进行过滤和操纵相关数据的场景
<6>.普通的文本输入提示和自动完成的场景
(3).Ajax不适用场景
<1>.部分简单的表单
<2>.搜索
<3>.基本的导航
<4>.替换大量的文本
<5>.对呈现的操纵  