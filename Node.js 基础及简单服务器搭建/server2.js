var http = require('http');
var fs = require('fs');
var url = require('url');  // url 工具库
var queryString = require('querystring');

// Route 
function startServer(route, handle) {
    var onRequest = function(request, response) { // 均为stream 的实例\
        var pathname = url.parse(request.url).pathname;
        console.log('Request received ' + pathname);

        // 获取GET 请求query
        // var params = url.parse(request.url, true).query; // false 输出字符串
        // route(pathname, handle, response, params);

        // 获取POST 数据
        var data = "";
        request.on("error", function(err) {
            console.error(err);
        }).on("data", function(chunk) {
            data += chunk; 
        }).on('end', function() {
            if (request.method === 'POST') {
                // 禁止过大数据占据服务器
                if(data.length > 1e6) {
                    request.connection.destroy();
                }
                route(pathname, handle, response, queryString.parse(data));
            } else {
                var params = url.parse(request.url, true).query; // false 输出字符串
                route(pathname, handle, response, params);
            }
            
        })
    }
    
    var server = http.createServer(onRequest);
    
    server.listen(3000, '127.0.0.1');
    console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;

// 代码重构