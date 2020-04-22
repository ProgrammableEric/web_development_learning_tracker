var http = require('http');
var fs = require('fs');


// Route 
function startServer() {
    var onRequest = function(request, response) { // 均为stream 的实例\
        console.log('Request received');
        console.log(request.url);

        if (request.url === '/' || request.url === '/home'){
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);  // 字符串化方便传输 -> JSON.parse() 
        } else if (request.url === '/review') {
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
        } else if (request.url === '/json') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var jsonObj = {
                writer: 'John',
                song: 'Stop this train'
            }
            response.end(JSON.stringify(jsonObj));
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname+'/404.html', 'utf8').pipe(response);
        }
    }
    
    var server = http.createServer(onRequest);
    
    server.listen(3000, '127.0.0.1');
    console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;

// 代码重构