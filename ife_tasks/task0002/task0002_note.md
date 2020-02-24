## Miscellaneous
#### `window.onload = function() {}` 
In case JS executes before the DOM fully loads. 

#### js 的加载
无论当前 JavaScript 代码是内嵌还是在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。JavaScript 执行过程耗时越久，浏览器等待响应用户输入的时间就越长。

浏览器在下载和执行脚本时出现阻塞的原因在于，脚本可能会改变页面或 JavaScript 的命名空间，它们对后面页面内容造成影响。此特性适用于各方法加载的javascript 文件包括 script 标签，src 属性等。

__脚本位置__
放在`<head>`中的js文件会停止解析当前的内容而优先下载脚本并执行脚本代码。这意味着，其后的 styles.css 样式文件和`<body>`标签都无法被加载，由于`<body>`标签无法被加载，那么页面自然就无法渲染了。也会造成`getElementByID` 无法找到对应html 标签的情况。
bin

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTc2NDA2MDg5LDE1MDgyOTc0MDgsLTc0OD
U4NTI5OSwyNTA2MTYwMTQsLTIwODg3NDY2MTJdfQ==
-->