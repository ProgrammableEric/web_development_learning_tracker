
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



<!--stackedit_data:
eyJoaXN0b3J5IjpbODIxNTMyOTg0LC0xNzc1NTU2NzI3LC0xNj
UwOTA3ODk3LC0xODcwMTU0MzQ3LDE1NjQ5MDMwMTEsMTM0MDkw
MTE2MiwtMTg4NjQxNTg3MCwtNDEzNTg2NDE2LC0xMzU0OTYzMD
k4LC0xMjc1MzM1MDg2LC0xMzY1MDM3NTMxLC0yMDA5MTIwMTky
LC03MDQzNzg2MDUsMTQ0NzgwOTQ4MCw4NzE5ODk0NjksLTEyNj
cxMjQ1MjQsLTE2MTUyNTUwMDgsNDI5MzQwMDk2LC0xMDEzMTM1
NDIxLDMzNDE1NTM5M119
-->