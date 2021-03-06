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
// or
delete  myObj.sites["site1"];
~~~

#### JSON.parse() 
JSON 通常用于与服务端交换数据。在接收服务器数据时一般是字符串。我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

`JSON.parse(text[, reviver])`
-   **text:** 必需， 一个有效的 JSON 字符串。
-   **reviver:**  可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

~~~javascript
// JSON used in AJAX 
var  xmlhttp = new  XMLHttpRequest();
xmlhttp.onreadystatechange = function()  {  
	if  (this.readyState == 4 && this.status == 200)  {
	  myObj = JSON.parse(this.responseText); 
	  document.getElementById("demo").innerHTML = myObj.name; 
	  }  
}; 
xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
xmlhttp.send();
~~~

**对于Date 对象**
~~~javascript
// JSON 不能直接存储解析Date 对象，需先转换为字符串再将字符串转换为Date对象
var  text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}'; 
var  obj = JSON.parse(text, function  (key, value)  {  
	if  (key == "initDate")  {  
		return  new  Date(value); 
	}  else  {  return  value; }
	}
); 
document.getElementById("demo").innerHTML = obj.name + "创建日期：" + obj.initDate;
~~~

#### JSON.stringify()
反向过程：将JS对象转化为字符串。JSON 通常用于与服务端交换数据。在向服务器发送数据时一般是字符串。
`JSON.stringify(value[, replacer[, space]])`
-   **value:**
    
    必需， 要转换的 JavaScript 值（通常为对象或数组）。
    
-   **replacer:**
    
    可选。用于转换结果的函数或数组。
    
    如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
    
    如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
    
-   **space:**
    
    可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t

**注意**
- JSON 不能存储 Date 对象。JSON.stringify() 会将所有日期转换为字符串。
- JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。我们可以在执行 JSON.stringify() 函数前将函数转换为字符串来避免以上问题的发生：
~~~javascript
var  obj = {  "name":"Runoob", "alexa":function  ()  {return  10000;}, "site":"www.runoob.com"}; 
obj.alexa = obj.alexa.toString(); 
var  myJSON = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON;
~~~

#### eval()
由于 JSON 语法是 JavaScript 语法的子集，JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。

eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：

~~~javascript
var  txt = '{ "sites" : [' + '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' + '{ "name":"google" , "url":"www.google.com" },' + '{ "name":"微博" , "url":"www.weibo.com" } ]}';

var  obj = eval  ("(" + txt + ")"); document.getElementById("name").innerHTML=obj.sites[0].name  

document.getElementById("url").innerHTML=obj.sites[0].url
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

## JSONP 
Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为**同源策略**。它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。

#### 服务端
如客户想访问 :  **https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction**。

假设客户期望返回数据：["customername1","customername2"]。

真正返回到客户端的数据显示为: callbackFunction(["customername1","customername2"])。- 参加ajaxnote. 

~~~php
<?php  header('Content-type: application/json'); //获取回调函数名  
$jsoncallback = htmlspecialchars($_REQUEST  ['jsoncallback']); //json数据  
$json_data = '["customername1","customername2"]'; //输出jsonp格式的数据  
echo  $jsoncallback . "(" . $json_data . ")"; ?>
~~~

#### 客户端实现callbackFunction 函数
~~~javascript
<script  type="text/javascript"> 
	function  callbackFunction(result, methodName)  {  
		var  html = '<ul>'; 
		for(var  i = 0; i < result.length; i++)  {  
			html += '<li>' + result[i] + '</li>'; 
		}  
		html += '</ul>';
		document.getElementById('divCustomers').innerHTML = html; 
		} 
</script>
~~~



<!--stackedit_data:
eyJoaXN0b3J5IjpbNzU3ODE5MjIzLDIxMDE3MDA1ODAsMTU3MT
I1MTYwMywxNTE3Mzg3MjU5LDE0Njk1ODMwNDUsMTA1NDMxMDY0
MCwtMTM5OTY1MTQzNV19
-->