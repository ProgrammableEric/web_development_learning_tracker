function callFunction(fun, name) {
    fun(name);
}

function sayHi() {
    console.log("hi!");
}

sayHi();

// 匿名函数
var sayBye = function(name) {
    console.log(name + " Bye!");
}

sayBye();

callFunction(sayBye, 'Jack');



