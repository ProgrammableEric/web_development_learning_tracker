# JSON Note 

## 什么是JSON ?

-   JSON 指的是 JavaScript 对象表示法（**J**ava**S**cript  **O**bject  **N**otation）
-   JSON 是轻量级的文本数据交换格式，比 XML 更小、更快，更易解析。
-   JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
-   JSON 具有自我描述性(人类可读)，更易理解
- **JSON 文本格式在语法上与创建 JavaScript 对象的代码相同**。由于这种相似性，无需解析器，JavaScript 程序能够使用内建的 eval() 函数，用 JSON 数据来生成原生的 JavaScript 对象。

## 为什么使用 JSON？

对于 AJAX 应用程序来说，JSON 比 XML 更快更易使用：

#### 使用 XML

-   读取 XML 文档
-   使用 XML DOM 来循环遍历文档
-   读取值并存储在变量中

#### 使用 JSON

-   读取 JSON 字符串
-   用 eval() 处理 JSON 字符串

## JSON 语法
一些例子：
~~~javascript
{  "name":"菜鸟教程" , "url":"www.runoob.com"  } // 多个

{  "sites": [  {  "name":"菜鸟教程" , "url":"www.runoob.com"  }, {  "name":"google" , "url":"www.google.com"  }, {  "name":"微博" , "url":"www.weibo.com"  }  ]  } // 数组

{  "flag":true  } // bool 

{  "runoob":null  } // Null 

中括号数组，大括号对象
~~~

#### 循环
~~~javascript
var  myObj = {  "name":"runoob", "alexa":10000, "site":null  }; 
for  (x  in  myObj)  {  
	document.getElementById("demo").innerHTML += myObj[x] + "<br>"; 
}

#### 嵌套
~~~javascript
myObj = {  
	"name":"runoob", 
	"alexa":10000, 
	"sites": {  
		"site1":"www.runoob.com", 
		"site2":"m.runoob.com", 
		"site3":"c.runoob.com"  
	}  
}
// 访问
x = myObj.sites.site1; 
// 或者  
x = myObj.sites["site1"];
~~~

#### 删除
~~~javascript
delete  myObj.sites.site1;
~~~
~~~

## JSON 对比 XML 
XML 比 JSON 更难解析。

JSON 可以直接使用现有的 JavaScript 对象解析。

针对 AJAX 应用，JSON 比 XML 数据加载更快，而且更简单：

使用 XML

-   获取 XML 文档
-   使用 XML DOM 迭代循环文档
-   接数据解析出来复制给变量

使用 JSON

-   获取 JSON 字符串
-   JSON.Parse 解析 JSON 字符串



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMDY0MTQwNzQsLTEzOTk2NTE0MzVdfQ
==
-->