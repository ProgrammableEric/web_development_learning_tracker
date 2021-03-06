
# HTML DOM 笔记 
资料来源：[runnob.com](https://www.runoob.com/htmldom/htmldom-intro.html)

## 什么是 DOM？

DOM 是 W3C（万维网联盟）的标准。

DOM 定义了访问 HTML 和 XML 文档的标准：

> "W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"

W3C DOM 标准被分为 3 个不同的部分：

-   核心 DOM - 针对任何结构化文档的标准模型
-   XML DOM - 针对 XML 文档的标准模型
-   HTML DOM - 针对 HTML 文档的标准模型

## 什么是 HTML DOM？

HTML DOM 是：

-   HTML 的标准对象模型
-   HTML 的标准编程接口
-   W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。

换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。

## HTML DOM  节点

在 HTML DOM 中，**所有事物都是节点**。DOM 是被视为节点树的 HTML。

### DOM 节点 ( Nodes)

根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

-   整个文档是一个文档节点
-   每个 HTML 元素是元素节点
-   HTML 元素内的文本是文本节点
-   每个 HTML 属性是属性节点
-   注释是注释节点

下面的图片展示了节点树的一部分，以及节点之间的关系：

![Node tree](https://www.runoob.com/wp-content/uploads/2013/09/dom_navigate.gif)

~~~html
<html>  
	<head>  
		<meta  charset="utf-8">  
		<title>DOM 教程</title>  
	</head>  
	<body>  
		<h1>DOM 课程1</h1>  
		<p>Hello world!</p>  
	</body> 
</html>
~~~
DOM 处理中的常见错误是希望元素节点包含文本。

在本例中：`<title>`DOM 教程`</title>`，元素节点 <title>，包含值为 "DOM 教程" 的文本节点。`<title>` 节点也拥有一个子节点：文本节点 "DOM 教程"

可通过节点的  innerHTML  属性来访问文本节点的值。

## HTML DOM  方法

HTML DOM 方法是我们可以在节点（HTML 元素）上执行的动作。

HTML DOM 属性是我们可以在节点（HTML 元素）设置和修改的值。

### 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

### 一些 DOM 对象方法

这里提供一些您将在本教程中学到的常用方法:

getElementById() - 返回带有指定 ID 的元素。

getElementsByTagName() - 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。

getElementsByClassName() - 返回包含带有指定类名的所有元素的节点列表。

appendChild() - 把新的子节点添加到指定节点。

removeChild() - 删除子节点。

replaceChild() - 替换子节点。

insertBefore() - 在指定的子节点前面插入新的子节点。

createAttribute() - 创建属性节点。

createElement() - 创建元素节点。

createTextNode() - 创建文本节点。

getAttribute() - 返回指定的属性值。

setAttribute() - 把指定属性设置或修改为指定的值。

## HTML DOM  属性

属性是节点（HTML 元素）的值，您能够获取或设置。属性本身也是节点。

### nodeName 与 nodeValue
nodeName 属性规定节点的名称。

-   nodeName 是只读的
-   元素节点的 nodeName 与标签名相同
-   属性节点的 nodeName 与属性名相同
-   文本节点的 nodeName 始终是 #text
-   文档节点的 nodeName 始终是 #document

nodeValue 属性规定节点的值。

-   元素节点的 nodeValue 是 undefined 或 null
-   文本节点的 nodeValue 是文本本身
-   属性节点的 nodeValue 是属性值

### nodeType 属性

nodeType 属性返回节点的类型。nodeType 是只读的。

比较重要的节点类型有：

元素节点 - 1

属性节点 - 2

文本节点 - 3

注释节点 - 8

文档节点 - 9

## HTML DOM 访问
访问 HTML 元素等同于访问节点

您能够以不同的方式来访问 HTML 元素：

-   通过使用 getElementById() 方法
-   通过使用 getElementsByTagName() 方法
-   通过使用 getElementsByClassName() 方法
**注意：**getElementsByClassName() 在 Internet Explorer 5,6,7,8 中无效。

#### id , class 与 name 的区别 ([参考](https://www.cnblogs.com/polk6/archive/2013/05/28/3101571.html))
1. name ：指定标签的名称。在form表单中作为传递给服务器单列表的变量名。 e.g. `<input type="text" name="username" />` 传到服务器为：`username='text的值'`。也可用name 合并选择多个标签，统一操作。
2. id ：指定标签的唯一标识。
3. class ：指定标签的类名。CSS操作，把一些特定样式放到一个class类中，需要此样式的标签，可以在添加此类。**注意** 可以把多个类，放在一个class属性里，但必须用空格隔开；如：class='btnsubmit btnopen'

##### 用法举例
~~~html
<input type="radio" name='sex'/>男
<input type="radio" name='sex'/>女
<input type=password id="userpwd" />
<input type=button class="btnsubmit" />
~~~
首先记住优先级顺序：id>name>class,什么是优先级呢？说白了就是精确定位的准确度，[CSS选择器](https://wenwen.sogou.com/s/?w=CSS%E9%80%89%E6%8B%A9%E5%99%A8&ch=ww.xqy.chain)选择的先后顺序。
再说说用法，getElementById()返回固定id的对象，HTML文档中id对象一般是唯一的；getElementsByName()和getElementsByClassName()返回的是一个数组，HTML文档中name属性和class属性不是唯一的. class 往往定义一类css样式，然后在多处使用。

## HTML DOM 修改

修改 HTML DOM 意味着许多不同的方面：

-   创建 / 改变 HTML 内容 - `.innerHTML`
-   改变 CSS 样式 - `.style`
-   改变 HTML 属性 -  
-   创建新的 HTML 元素 - 首先必须创建该元素（元素节点），然后把它追加到已有的元素上。e.g.
~~~html
<div  id="div1">  
	<p  id="p1">这是一个段落。</p>  
	<p  id="p2">这是另一个段落。</p>  
</div>  
<script> 
	var para=document.createElement("p"); 
	var node=document.createTextNode("这是一个新段落。"); 			
	para.appendChild(node); 
	var element=document.getElementById("div1"); 	
	element.appendChild(para); 
</script>
~~~
-   删除已有的 HTML 元素
如需删除 HTML 元素，您必须清楚该元素的父元素：
~~~html
<div  id="div1">  
	<p  id="p1">这是一个段落。</p>  
	<p  id="p2">这是另一个段落。</p>  
</div>  
<script> 
	var parent=document.getElementById("div1"); 
	var child=document.getElementById("p1"); 
	parent.removeChild(child); 
</script>
~~~
- 替换 HTML 元素
~~~html
<div  id="div1">  
	<p  id="p1">这是一个段落。</p>  
	<p  id="p2">这是另外一个段落。</p>  
</div>  
<script> 
	var parent=document.getElementById("div1"); 
	var child=document.getElementById("p1"); 
	var para=document.createElement("p"); 
	var node=document.createTextNode("这是一个新的段落。"); 
	para.appendChild(node); 
	parent.replaceChild(para,child); 
</script>
~~~
-   使用 / 改变事件（处理程序）
~~~html
<p  id="p1">Hello world!</p>  
<script> function ChangeText() { 
	document.getElementById("p1").innerHTML="Hello Runoob!"; } 
</script>  
<input  type="button"  onclick="ChangeText()"  value="修改文本"  />
~~~

## HTML DOM 事件
当事件发生时，可以执行 JavaScript，比如当用户点击一个 HTML 元素时。

如需在用户点击某个元素时执行代码，请把 JavaScript 代码添加到 HTML 事件属性中。

HTML 事件的例子：

-   当用户点击鼠标时
~~~html
<script> 
	function changetext(id){ 
		id.innerHTML="Ooops!"; 
	} 
</script>  
</head>  
	<body>  
		<h1  onclick="changetext(this)">点击文本!</h1>
	...
~~~
-   当网页已加载时
当用户进入或离开页面时，会触发 onload 和 onunload 事件。
onload 事件可用于检查访客的浏览器类型和版本，以便基于这些信息来加载不同版本的网页。
onload 和 onunload 事件可用于处理 cookies。 - `<body  onload="checkCookies()">`

-   当图片已加载时
-   当鼠标移动到元素上时
onmouseover 和 onmouseout 事件可用于在鼠标指针移动到或离开元素时触发函数。
-   当输入字段被改变时
onchange 事件常用于输入字段的验证。 `<input  type="text"  id="fname"  onchange="upperCase()">`
-   当 HTML 表单被提交时
-   当用户触发按键时
onmousedown、onmouseup 以及 onclick 事件是鼠标点击的全部过程。首先当某个鼠标按钮被点击时，触发 onmousedown 事件，然后，当鼠标按钮被松开时，会触发 onmouseup 事件，最后，当鼠标点击完成时，触发 onclick 事件。

## HTML DOM 导航
#### HTML 节点列表
getElementsByTagName() 方法返回_节点列表_。节点列表是一个节点数组。
`var  x=document.getElementsByTagName("p"); y=x[1];` - 访问第二个`<p>`.

`length` 获取节点列表的长度
~~~javascript
x=document.getElementsByTagName("p"); 
for  (i=0;i<x.length;i++)  {  
	document.write(x[i].innerHTML); 
	document.write("<br>"); 
}
~~~

#### 导航节点关系
~~~html
<html>  
	<head>  
		<meta  charset="utf-8">  
	</head>  
	<body>  
		<p>Hello World!</p>  
		<div>  
			<p>DOM 是非常有用的!</p>  
			<p>这个实例演示了节点的关系。</p>  
		</div>  
	</body>  
</html>
~~~
-   首个 `<p>` 元素是 `<body>` 元素的首个子元素（firstChild）
-   `<div>` 元素是 `<body>` 元素的最后一个子元素（lastChild）
-  ` <body>` 元素是首个 `<p>` 元素和 `<div>` 元素的父节点（parentNode）

#### DOM 根节点
这里有两个特殊的属性，可以访问全部文档：

-   document.documentElement - 全部文档
-   document.body - 文档的主体S

#### childNodes 和 nodeValue
~~~html
<p  id="intro">Hello World!</p>  
<script> 
	txt=document.getElementById("intro").childNodes[0].nodeValue; 
	document.write(txt); 
</script>
~~~
**注意： ** 在上面的例子中，getElementById 是一个方法，而 childNodes 和 nodeValue 是属性。




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNjA0MjExNDQsLTEyMTc0NDY0OTUsMT
A0OTEyODQ5MCwxNTE0NzE2MTc5LDE5NjAxODE4NSwtNDUxNDM2
NjIyLDEwMzQyNTU2Myw0Njk2NDgyODMsLTU4OTU1NjA2NSw3NT
gzODIwMTcsNDAxMjM1MTYsMTM0MTU1MTU4MiwxNTE0OTA4MjY3
LDIxMjYxMDkyNzEsLTE3NDAzNTQ5OTcsLTQzNjAwNjY3MywtMz
A1NTMwODk1XX0=
-->