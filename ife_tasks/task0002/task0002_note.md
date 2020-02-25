## Miscellaneous
#### `window.onload = function() {}` 
In case JS executes before the DOM fully loads. 

## JS 的加载 [link]([https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html](https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html))
无论当前 JavaScript 代码是内嵌还是在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。JavaScript 执行过程耗时越久，浏览器等待响应用户输入的时间就越长。

浏览器在下载和执行脚本时出现阻塞的原因在于，脚本可能会改变页面或 JavaScript 的命名空间，它们对后面页面内容造成影响。此特性适用于各方法加载的javascript 文件包括 script 标签，src 属性等。

#### 脚本位置
放在`<head>`中的js文件会停止解析当前的内容而优先下载脚本并执行脚本代码。这意味着，其后的 styles.css 样式文件和`<body>`标签都无法被加载，由于`<body>`标签无法被加载，那么页面自然就无法渲染了。也会造成`getElementByID` 无法找到对应html 标签的情况。

并行下载不能完全解决脚本阻塞的问题，页面仍然必须等待所有 JavaScript 代码下载并执行完成才能继续。（因为JS可能会更该页面）因此推荐：脚本放在body底部, 大部分页面内容可以提早呈现。
~~~html
`<``html``>`
`<``head``>`
`<``title``>Source Example</``title``>`
`<``link` `rel``=``"stylesheet"` `type``=``"text/css"` `href``=``"styles.css"``>`
`</``head``>`
`<``body``>`
`<``p``>Hello world!</``p``>`
`<!-- Example of efficient script positioning -->`
`<script type="text/javascript" src="script1.js">``</script>`
`<script type="text/javascript" src="script2.js">``</script>`
`<script type="text/javascript" src="script3.js">``</script>`
`</``body``>`
`</``html``>`
~~~

#### 脚本数量
下载单个 100Kb 的文件将比下载 5 个 20Kb 的文件更快。也就是说，减少页面中外链脚本的数量将会改善性能。

#### 无阻塞脚本
`windows.onload {}` 在页面加载完成后才加载 JavaScript 代码。
`<script>`的`defer` 属性 - `Defer` 属性指明本元素所含的脚本不会修改 DOM，因此代码能安全地延迟执行。 仅被 IE 4 + 与 Firefox 3.5 + 支持，不通用。 对应的 JavaScript 文件将在页面解析到`<script>`标签时开始下载，但不会执行，直到 DOM 加载完成，即`onload`事件触发前才会被执行。当一个带有 `defer` 属性的 JavaScript 文件下载时，它不会阻塞浏览器的其他进程，因此这类文件可以与其他资源文件一起并行下载。
HTML 5 为`<script>`标签定义了一个新的扩展属性：`async`。它的作用和 `defer` 一样，能够异步地加载和执行脚本，不因为加载脚本而阻塞页面的加载。但是有一点需要注意，在有 `async` 的情况下，JavaScript 脚本一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果 JavaScript 脚本前后有依赖性，使用 `async` 就很有可能出现错误。

#### 动态脚本元素
 动态脚本代买运行时即会被加载，之后立即执行。此技术的重点在于：无论在何处启动下载，文件的下载和运行都不会阻塞其他页面处理过程。您甚至可以将这些代码放在`<head>`部分而不会对其余部分的页面代码造成影响
当文件使用动态脚本节点下载时，返回的代码通常立即执行。当为自运行脚本则无碍，当脚本为其他页面提供接口，则需要跟踪脚本下载完成并是否准备妥善。以下：
~~~javascript
function loadScript(url, callback){
	var script = document.createElement ("script")
	script.type = "text/javascript";
	if (script.readyState){ //IE
		script.onreadystatechange = function(){
		if (script.readyState == "loaded" || script.readyState
		  						== "complete"){
			script.onreadystatechange = null;
			callback();
				}
			};
	} else { //Others
		script.onload = function(){
		callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
~~~

大多数浏览器不保证多个脚本加载运行的次序，修正：
~~~javascript
loadScript("script1.js", function(){
	loadScript("script2.js", function(){
		loadScript("script3.js", function(){
			alert("All files are loaded!");
		});
	});
});
~~~
动态脚本加载是非阻塞 JavaScript 下载中最常用的模式，因为它可以跨浏览器，而且简单易用。

#### Ajax xhr 对象
JavaScript 文件必须与页面放置在同一个域内，不能从 CDN 下载（CDN 指"内容投递网络（Content Delivery Network）"，所以大型网页通常不采用 XHR 脚本注入技术。详见Ajax Note. 

## JS 的特性

### Prototype 原型链 [link]([https://zhuanlan.zhihu.com/p/40797690](https://zhuanlan.zhihu.com/p/40797690))
#### 对象
话说在Javascript中一切皆对象，对象是引用类型的一个实例，在JS中引用类型包括：Object、Array、Date、RegExp和Function，除此之外，ECMAScript还提供3个特殊的引用类型：Boolean、Number、String

对象是某个特定引用类型的实例，新对象是通过new操作符后跟一个构造函数来创建的，构造函数本身就是一个函数，只不过该函数是出于创建对象的目的而出现的。

~~~javascript
console.log(typeof Object);//function
console.log(typeof Array);//function
console.log(typeof Date);// function
console.log(typeof RegExp);//function

var obj = new Object();
var array = new Array();
var date = new Date();
var reg = new RegExp();

console.log(typeof obj);//Object
console.log(typeof array);//Object
console.log(typeof date);//Object
console.log(typeof reg);//Object
~~~





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ4NTk1NDczMCw3MTE5NDc3MjgsLTE2MD
I5NzI5NjMsMTY3OTA2NDA4LDE4NDc0MTA3OTEsLTIzNzIzMDc5
NywtMTg4MDU0NjU3NSwxODE4MDc4NDMzLC01MzM2NDc3MzksOT
Q3NTg1NDM2LDg0Mjg0ODUyLDE1MDgyOTc0MDgsLTc0ODU4NTI5
OSwyNTA2MTYwMTQsLTIwODg3NDY2MTJdfQ==
-->