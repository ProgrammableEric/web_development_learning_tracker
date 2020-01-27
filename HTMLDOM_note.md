
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

在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。

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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMTA1MzMyODFdfQ==
-->