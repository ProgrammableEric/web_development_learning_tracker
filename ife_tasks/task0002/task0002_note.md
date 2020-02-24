## Miscellaneous
#### `window.onload = function() {}` 
In case JS executes before the DOM fully loads. 

#### js 的加载
无论当前 JavaScript 代码是内嵌还是在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。JavaScript 执行过程耗时越久，浏览器等待响应用户输入的时间就越长。

浏览器在下载和执行脚本时出现阻塞的原因在于，脚本可能会改变页面或 JavaScript 的命名空间，它们对后面页面内容造成影响。此特性适用于各方法加载的javascript 文件包括 script 标签，src 属性等。

__脚本位置__
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

__脚本数量__
下载单个 100Kb 的文件将比下载 5 个 20Kb 的文件更快。也就是说，减少页面中外链脚本的数量将会改善性能。

#### 无阻塞脚本
`windows.onload {}` 在页面加载完成后才加载 JavaScript 代码。
`defer` - only for IE 4 + 与 Firefox 3.5 + . 




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUzMzY0NzczOSw5NDc1ODU0MzYsODQyOD
Q4NTIsMTUwODI5NzQwOCwtNzQ4NTg1Mjk5LDI1MDYxNjAxNCwt
MjA4ODc0NjYxMl19
-->