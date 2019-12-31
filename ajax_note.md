## AJAX （Asynchronous Javascript and XML ）
### Preview 
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

#### 网络相关
**DNS 服务器**：域名解析。 提供域名与ip 地址的映射关系。（过程：客户端首先查找Hosts文件夹，查询该域名配置信息是否被保存，若否，则访问DNS服务器查找域名对应IP地址，之后通过路由器访问该地址）

**端口：** e.g., www.baidu.com:80 (百度服务器的80端口提供的网页服务) 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkxOTc2MTkyLDE0OTg5MTA1NzcsLTE2ND
k3NTY2MDgsLTMxNDk0NzAyLDY4MTc2ODE4NSwxNTA5OTAyNDU4
XX0=
-->