
## Preview 
- AJAX（Asynchronous Javascript and XML ）
- Ajax 的作用： 使用JS 代码，获取服务器的数据
- Ajax 的效果： 在不刷新整个页面的情况下，通过一个url 地址获取服务器的数据，然后进行页面的**局部刷新** **异步刷新**
- 实例：评论异步加载（单词只加载若干评论，“加载更多”按钮）/ 用户名的验证（服务器通过对比数据库判断用户名是否可用

### 相关概念
#### 服务器与客户端

服务器：能提供某种服务的电脑。硬件配置较高。（卡片机，刀片机）

客户端：能使用服务器所提供服务的电脑。个人电脑，手机，平板... 

服务器软件：更多选择Linux OS. 服务软件：
- HTTP: Apache, Tomcat, IIS ...
- 上传下载: VsFtp etc. 
- 邮箱：SendMail etc. 
- 数据库：MySql, Oracle etc. 
- MAMP: Mac, Apache, MySql, PHP 

#### 网络相关
**DNS 服务器**：域名解析。 提供域名与ip 地址的映射关系。（过程：客户端首先查找Hosts文件夹，查询该域名配置信息是否被保存，若否，则访问DNS服务器查找域名对应IP地址，之后通过路由器访问该地址）

**端口：** 端口用来区分一台服务器上提供的不同服务。e.g., www.baidu.com:80 (百度服务器的80端口提供的网页服务) 

#### 通信协议
 常见协议：HTTP,HTTPS - 超文本， FTP - 文件传输，SMTP - 简单邮件传输

## PHP 

### 执行原理
- PHP 只能在服务器打开
- 可以和html 结合使用
- 执行原理：客户端   <->   Apache 模块（网页相关，调用php） <->  php 模块（语法解析）

### 基础语法
- 代码在<?php ... ?> 内
- 变量定义，声明，使用要加`$`
- 字符串拼接 `.` `$str3 = $str1 . $str2; `
- **数组** `echo` `print_r()` `var_dump()` `json_encode()` , 自定义下表索引，遍历 `for loop` `foreach`
- **函数** 系统函数 / 自定义函数 `function` 关键字 
- **`get` 请求参数的获取** `$_GET["classname"], $_POST["classname"]` 

## AJAX 
### 基本场景，步骤
局部，异步刷新

步骤：
 1. 创建XMLHttpRequest 对象
 2. 准备发送网络请求
 3. 开始发送网络请求
 4. 指定回调函数

代码示例：

~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>login</title>
	<script>
		
		// 触发点击事件
		window.onload = function(){
			var btn = document.getElementById("btn");
			btn.onclick = function() {
				var username = document.getElementById("username").value; 
				// 访问checkUsername.php 而不是 访问另一个页面，将username 传递给这个文件
				
				// ***! AJAX !***  1, 2, 3 ,4步

				// 1. 创建XMLHttprequest 对象
				var xhr = null; 
				if (window.XMLHttpRequest) {    // 兼容性处理
					xhr = new XMLHttpRequest();
				} else {
					// IE6 浏览器
					xhr = new ActiveXObject("Mircorsoft。XMLHTTP"); 
				}


				// 2. 准备发送，get 或者 post 取决于后台接口
				xhr.open("get", "./checkUsername.php?username=" + username, true);  // true 同步， false 异步， default 为 false 异步
				// xhr.open("post", "checkUsername.php", true); 


				// 3. 执行发送
				xhr.send(null);  
				// var param = "username" + username; 
				// xhr.send(param)  // Post 请求 参数应该以key=value的格式放到请求体中
				// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");   // 设置xhr 请求头信息，仅针对post请求


				// 4. 设置回调函数
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4){   // 判断当前状态是否正确
						if (xhr.status == 200){    // 服务器响应正常
							// 得到数据的写法 或者 xhr.responseXML 
							var result = xhr.responseText;   // 得到服务器echo的字符串
							console.log(result);
							document.getElementById("result").innerText = result; 
						}
					}
				}
				console.log(username);
			}; 
		};

	</script>
</head>
<body>

	<h1>登录界面</h1>
	<form action="checkUsername.php" method="get">
		
		用户名：<input type="text" name="username" id="username">
		<input type="button" value="验证用户名" id="btn">
		<span id="result"> </span>
		<br>
		密码：  <input type="password" name="password"><br>
		<input type="submit" value="提交">
		
	 </form>

</body>
</html>
~~~

#### `querySelector()` vs. `getElementById() ` [link](https://juejin.im/post/5a7d8f325188257a6c690065)
- 兼容性：相似
- 效率： `querySelector()` 低于 `getElementById()`
- 灵活性： 
~~~javascript
querySelector('div img .test') 
//找到div下面的img下面类名为test的元素
//对比 GEBI和GEBC 只能选择固定id或者固定类名
~~~
- 动态性
通过QSA选择的不受后来DOM变化的影响，但是通过GEBC会受DOM的影响。
~~~javascript
<!DOCTYPE html>  
<html  lang="en">  
<head>  
	<meta  charset="UTF-8">  
	<meta  name="viewport"content="width=device-width, initial-scale=1.0">  
	<meta  http-equiv="X-UA-Compatible"  content="ie=edge">		
	<title>Document</title>  
</head>  
<body>  
	<script> 
		a =  document.querySelectorAll('img') 
		b =  document.getElementsByTagName('img')  
		document.body.appendChild(new  Image())  
		console.log(a.length)  // 0
		console.log(b.length)  // 1 
	</script>  
</body>  
</html>
~~~

#### `onblur` 事件 [link](https://www.w3school.com.cn/jsref/event_onblur.asp)

### 同步与异步
- 使用回调函数是针对于异步操作的处理。若同步则`readyState = 4` 发生在请求send 之后。
- 同步网页会卡死，异步不影响继续其他操作
- 使用异步，网络访问的延迟是普遍现象
- **JS 异步实现的底层原理** _单线程+事件队列_ 
-- 单线程： 代码从上往下依次执行
-- 事件队列：一个容器，存储一些回调函数，只有在js同步代码全部执行完才会可能被调用。其他例子： `window.onload`, `btn.onclick`, `input.onblur`.  `window.onload = function(){}` 相当于讲回调函数丢到事件队列当中。
- `xhr.send()` 发送请求，请求浏览器进行网络数据的请求。注意浏览器不是单线程 ，本步骤只是将请求发送给浏览器内核，由浏览器负责服务器的访问。

### 数据格式
#### XML - 标签方式组织的数据
```xml
<? xml version="1.0" encoding="utf-8" ?>
<students>
	<student>
		<name>eric</name>
		<age>24</age>
		...
	</student>
	...
</students>
```
缺点：元数据(描述数据的数据)太多，导致占用内存太大，传输效率低，解析缓慢。
数据解析：
~~~javascript
<script type="text/javascript">
window.onload = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("get", "./server/getbooks.php", true);
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4){
			if (xhr.status == 200){
				var result = xhr.responseXML;
				var books = result.getElementsByTagName('booklist')[0].getElementsByTagName('book'); 

				var newHtml = document.getElementById('bookContainer').innerHTML;
				
				for (var i=0; i<books.length; i++){
					var itemBook = books[i];

					var name= itemBook.getElementsByTagName('name')[0].textContent;
			
					var author= itemBook.getElementsByTagName('author')[0].textContent;
					
					var desc= itemBook.getElementsByTagName('desc')[0].textContent;

					var tempHtml = "<tr><td>"+name+"</td><td>"+author+"</td><td>"+desc+"</td></tr>";

					newHtml += tempHtml;
				}

				document.getElementById('bookContainer').innerHTML = newHtml;

			}
		}
	}; 
}
</script>
~~~

#### JSON - 类似js 中的对象，key-value 形式
~~~json
{ 
	students: {
		{
			"name": eric 
			"age": 24
			...
		},
		...
	}
}
~~~
优势：数据体积小，传输, 解析效率高
数据解析： `JSON.parse(result)` 转化为对象数组

### AJAX 初步封装
~~~javascript
// 注意传入callback 函数作为参数,考虑各种情况
function myAjax(type, url, params, dataType, callback, async) {
	var xhr = null; 
	if (window.XMLHttpRequest) {    // 兼容性处理
		xhr = new XMLHttpRequest();
	} else {
		// IE6 浏览器
		xhr = new ActiveXObject("Mircorsoft.XMLHTTP"); 
	}

	//2 
	if (type == "get"){
		if (params && params != ""){
			url += "?" + params; 
		} 
	}

	xhr.open(type, url, async); // default async 

	//3
	if (type=="get"){
		xhr.send(null);
	} else if (type == "post"){
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	
	// 4 
	if (async){
		xhr.onreadystatechange = function(){

		if (xhr.readyState == 4){
			if (xhr.status == 200){

				var result = null;
				if (dataType == "json"){
					result = xhr.responseText;
					result = JSON.parse(result);
				} else if (dataType == "xml"){
					result = xhr.responseXML;
				} else {
					result = xhr.responseText;
				}

				if (callback) {
					callback(result); 
				}
			}
		}

	}} else {
		if (xhr.readyState == 4){
			if (xhr.status == 200){

				var result = null;
				if (dataType == "json"){
					result = xhr.responseText;
					result = JSON.parse(result);
				} else if (dataType == "xml"){
					result = xhr.responseXML;
				} else {
					result = xhr.responseText;
				}

				if (callback) {
					callback(result); 
				}
			}
		}
	}
			 
		}
~~~

#### `script`的工作原理
1.  浏览器一边下载HTML网页，一边开始解析。也就是说，不等下载完，就开始解析。
2.  解析过程中，发现script元素，就暂停解析，把网页渲染的控制权转交给JavaScript引擎
3.  如果script元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码（因为js可以修改DOM）；如果脚本加载时间过长，造成‘阻塞效应’，所以最好将script标签放在页面底部。如果某些代码一定要放在头部，最好直接将代码写入页面，而不是链接外部脚本。
4.  Javascript引擎执行完毕，控制权交还渲染引擎，恢复往下解析HTML网页。
5.  多个script外链标签，浏览器会同时下载，但是，会从上到下执行相应的js文件，即使后者先下载完成。（为保证脚本的依赖关系不会受到破坏）。
6.  解析和执行css，也会产生阻塞。
7.  对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载6~20个资源，但是不同域名的资源，没有这个限制。所以通常把静态文件放在不同的域名下，以加快下载速度。

### 进一步封装 - 对输入参数的格式优化
~~~javascript
obj = {
	url: "xxx"
	type: "get"
	dataType: "json"
}

// 解决参数设置默认值，参数顺序可调换的问题
// 将多个参数变为一个对象传入
function myAjax2(obj) {
	var defaults = {
		type: "get",
		url: "#",
		dataType: "json",
		data:{}
	}
	// obj 中的属性覆盖defaults 中的属性
	// 1. obj 中属性不存在与defaults, 则创建新属性
	// 2. obj 中属性已经存在，则覆盖defaults 中设置
	// 3. 属性只在defaults 存在，则保留预定义的默认值
	for (var key in obj){
		defaults[key] = obj[key]; 
	}
}
~~~
完整代码：
~~~javascript
function myAjax2(obj) {
	
	var defaults = {
		type: "get",
		url: "#",
		dataType: "json",
		data: {
			uname: "eric",
			age: 25
		},    // 请求参数
		async: true,
		success: function(result){console.log(result);}
	}

	// obj 中的属性覆盖defaults 中的属性
	// 1. obj 中属性不存在与defaults, 则创建新属性
	// 2. obj 中属性已经存在，则覆盖defaults 中设置
	// 3. 属性只在defaults 存在，则保留预定义的默认值
	for (var key in obj){
		defaults[key] = obj[key]; 
	}

	var xhr=null; 
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr= new ActiveXObject("Mircorsoft.XMLHTTP");
	}

	var params = "";
	for (var attr in defaults.data){
		params += attr + "=" + defaults.data[attr] + "&";
	}
	if (params){
		params = params.substring(0, params.length-1);
	}

	if (defaults.type == "get"){
		defaults.url += "?" + params;
	}
	xhr.open(defaults.type, defaults.url, defaults.async); 

	if (defaults.type == "get"){
		xhr.send();
	} else if (defaults.type == "post"){
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params); 
	}


	if (defaults.async) {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4){
				if (xhr.status == 200){
					var result = null; 
					if (defaults.dataType == "json"){
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if (defaults.dataType == "xml"){
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}

					defaults.success(result);
				}
			}
		}
	} else {
		if (xhr.readyState == 4){
				if (xhr.status == 200){
					var result = null; 
					if (defaults.dataType == "json"){
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if (defaults.dataType == "xml"){
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}

					defaults.success(result);
				}
			}
	}

}
~~~

### jQuery 中使用ajax [link](https://www.w3school.com.cn/jquery/ajax_ajax.asp)
~~~javascript
// jQuery 中使用ajax 
$.ajax({
	url: url,
	type: type,
	data:{uname: usernameValue},
	async: true;
	dataType: "text",
	success: function(result) {
		var username_result = document.getElementById("username_result");
		if (result == "ok") {
			username_result.innerText = "用户名可以使用";
		} else {
			username_result.innerText = "用户名已经被注册";
		}	 
	}
})
~~~
`$.get()` `$.post()` 

### 跨域
#### 同源策略
同源情况，ajax 才能正常获取数据
1. 协议相同
2. 域名相同
3. 地址端口号相同 （省略则为80）

#### 跨域的必要性
获取非同源服务器下的数据。

#### 跨域的实现
本质：借助html 的 script 标签 src 属性完成。即服务器返回了一个方法调用，这个方法是我们事先定义好的，返回的参数使我们想要的数据。
~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
		function foo(data){
			console.log(data + "!!!!");
		}
	</script>
	// 假设这里是跨域访问
	<script type="text/javascript" src="./JS/test.js"></script>
	<script type="text/javascript">
		console.log(str);
		console.log(str2);
		test();
		
		// window.onload = function(){
		// 	console.log(str);
		// 	console.log(str2);
		// 	test();
		// }
	</script>
</head>
<body>
	<h1>This is nice!</h1>
</body>
</html>
~~~

跨域引入外部php， 为方便传参
~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
		function foo(data){
			console.log(data);
		}
	</script>
	<script type="text/javascript" src="./PHP/data.php?city=beijing"></script>
	<script type="text/javascript">
		
	</script>
</head>
<body>
	
</body>
</html>
~~~ 

动态script标签的生成
~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- <script type="text/javascript" src="./PHP/data.php"></script> -->
	<script type="text/javascript">
		window.onload = function(){
			var btn = document.querySelector("#btn");
			btn.onclick = function(){
				var cityName = document.querySelector("#city").value;
				// 动态创建script标签，指定src 的值
				var script = document.createElement("script");
				script.src = "./PHP/data.php?city="+cityName;

				var head = document.querySelector("head");
				head.appendChild(script);
			}

		}
	</script>
</head>
<body>
	<h1>天气信息查询</h1>
	<input type="text" id="city" placeholder="请输入城市名称">
	<input type="button" id="btn" value="search">
	
</body>
</html>
~~~

#### 动态指定回调函数名称
~~~javascript
<script type="text/javascript">
	window.onload = function(){
		var btn = document.querySelector("#btn");
		btn.onclick = function(){
			var cityName = document.querySelector("#city").value;
			// 动态创建script标签，指定src 的值
			var script = document.createElement("script");
			script.src = "./PHP/data.php?city="+cityName+"&callback=foo2";

			window["foo2"] = function(data){
				console.log(data);
			};

			var head = document.querySelector("head");
			head.appendChild(script);
		}
		
	}
</script>
~~~
~~~php
<?php 

	//echo "var str = 'yo!'"; 
	$cbName = $_GET["callback"];
	$city = $_GET["city"];

	if ($city == "beijing"){
		echo $cbName."('yeh!')";
	} else {
		echo $cbName."('nuh!')"; 
	}
	
 ?>
~~~
百度提示词案例代码
~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>百度联想</title>
	<script type="text/javascript">
		window.onload = function() {
			var btn = document.querySelector("#btn");
			btn.onclick = function() {
				var keywordValue = document.querySelector("#keyword").value;
				console.log(keywordValue);
				
				var script = document.createElement("script");
				script.src = "https://suggestion.baidu.com/su?wd="+keywordValue+"&cb=wtf";

				window["wtf"] = function(data) {

					var liTag = "";
					for (var i=0;i<data.s.length; i++){
						var temp = data.s[i];
						liTag += "<li>"+ temp + "</li>";
					}

					var ulTag = document.querySelector("ul");
					ulTag.innerHTML = liTag;
				}

				var head = document.querySelector("head");
				head.appendChild(script);
			}

		}
	</script>
</head>
<body>
	<input type="text" id="keyword" placeholder="请输入关键字">
	<input type="button" id="btn" value="search">
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
</body>
</html>
~~~

#### 跨域的封装
注意： 
1. 考虑什么是变的 - 作为参数传入
2. 什么是不变的 - 提炼到方法体代码中
3. 通知调用者调用业务逻辑 - 传递callback 方法
4. 调用方便：运用obj 传参

~~~javascript
function myAjax(obj) {
	var defaults = {
		type: "get",
		url: "#",
		data: {},
		success: function(data){},
		jsonp: "callback",
		jsonpCallback: "wtf"
	}

	for (var key in obj){
		defaults[key] = obj[key];
	}

	var params = "";
	for (var attr in defaults.data){
		params += attr + "=" + defaults.data[attr] + "&";
	}
	if (params) {
		params = params.substring(0, params.length-1);
		defaults.url += '?' + params;
	}

	defaults.url += "&" + defaults.jsonp + '=' + defaults.jsonpCallback;
	console.log(defaults.url);

	var script = document.createElement("script");
	script.src = defaults.url;

	window[defaults.jsonpCallback] = function(data) {
		defaults.success(data);
	}

	var head = document.querySelector("head");
	head.appendChild(script);

}
~~~

jQuery 使用跨域
~~~javascript

~~~

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU2NjY1NTg3OSwtMTI5NTE0OTYwNSwtMT
A5OTM4MzM5MiwtMTc3ODk4NjU3NCwtMzQ4NDYxNDk3LDE2MDU3
NDg0MjEsLTE2NDE1ODU5NzUsLTE5NjU4ODYzMDAsMzAyMjk1MD
c2LC0xNzc1NTU2NzI3LC0xNjUwOTA3ODk3LC0xODcwMTU0MzQ3
LDE1NjQ5MDMwMTEsMTM0MDkwMTE2MiwtMTg4NjQxNTg3MCwtND
EzNTg2NDE2LC0xMzU0OTYzMDk4LC0xMjc1MzM1MDg2LC0xMzY1
MDM3NTMxLC0yMDA5MTIwMTkyXX0=
-->