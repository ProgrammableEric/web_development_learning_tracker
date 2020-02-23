## Miscellaneous
#### `window.onload = function() {}` 
In case JS executes before the DOM fully loads. 

#### js 的加载
无论当前 JavaScript 代码是内嵌还是在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。JavaScript 执行过程耗时越久，浏览器等待响应用户输入的时间就越长。

浏览器在下载和执行脚本时出现阻塞的原因在于，脚本可能会改变页面或 JavaScript 的命名空间，它们对后面页面内容造成影响。
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc0ODU4NTI5OSwyNTA2MTYwMTQsLTIwOD
g3NDY2MTJdfQ==
-->