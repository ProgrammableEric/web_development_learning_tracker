var http = require('http');
var fs = require('fs');

var onRequest = function(request, response) { // 均为stream 的实例
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(response);  // 字符串化方便传输 -> JSON.parse() 
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log("Server started on localhost port 3000");