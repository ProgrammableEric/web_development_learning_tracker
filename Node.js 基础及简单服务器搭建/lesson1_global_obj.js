// Window 全局对象，方法全局可调用
// lesson 1 全局变量

console.log(__dirname);

console.log("hello world");

setTimeout( () => {
    console.log("3 seconds have passed")
}, 3000);
// 箭头函数是ES6写法

var time = 0;
var timer = setInterval(() => {
    time += 2;
    console.log(time + " seconds have passed");
    if (time>5) {
        clearInterval(timer);
    }
}, 2000); 




