var fs = require('fs');

var readMe = fs.readFileSync("readMe.txt", "utf8");
console.log(readMe);
console.log("finished");  // 同步一行行执行

fs.writeFileSync("writeMe.txt", "hellow world !");

//nodejs 在执行js 代码时是单线程




// ~~~~~~~~~~~~~~~~~~~~  async 

var readMe = fs.readFile("readMe.txt", "utf8", function(err, data){
    console.log(data);
    fs.writeFile('writeMe.txt', data, function() {
        console.log("writeFinished");
    });
});  // 先注册事件到实践队列，主线程空闲时，执行实践队列中的排队事件

console.log("finished");
