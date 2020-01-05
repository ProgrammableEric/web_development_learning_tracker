
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

具体
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




<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM0MDkwMTE2MiwtMTg4NjQxNTg3MCwtND
EzNTg2NDE2LC0xMzU0OTYzMDk4LC0xMjc1MzM1MDg2LC0xMzY1
MDM3NTMxLC0yMDA5MTIwMTkyLC03MDQzNzg2MDUsMTQ0NzgwOT
Q4MCw4NzE5ODk0NjksLTEyNjcxMjQ1MjQsLTE2MTUyNTUwMDgs
NDI5MzQwMDk2LC0xMDEzMTM1NDIxLDMzNDE1NTM5MywtMTM5ND
IyMzM0MSwtMTcxMDUwMDk1MywtMTcxMDUwMDk1MywxOTE1NzYy
ODYxLDE0OTg5MTA1NzddfQ==
-->