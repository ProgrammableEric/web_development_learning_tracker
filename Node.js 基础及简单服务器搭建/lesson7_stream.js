// 请求是输入的流，响应是输出的流
// all streams are instances of EventEmitter 
// 应用： 1. 处理数据 - http, webpack, gulp 
//       2. 提高性能 - 文件内容->buffer->边读取边处理

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe_2.txt');

// 写法1 
// var data= ""

// myReadStream.on('data', function(chunk) {
//     data += chunk;
//     myWriteStream.write(chunk);
// })

// myReadStream.on('end', function(){
//     console.log(data);
// })


// 写法2
// var writeData = "hello world";
// myWriteStream.write(writeData, 'utf8');
// myWriteStream.end(); // 结束写入过程
// myWriteStream.on('finish', function() {
//     console.log("finished");
// }); 


// 管道
myReadStream.pipe(myWriteStream); // 相当于 x | y 

