// Route 代码重构
var server = require('./server2');
var router = require('./router');
var handler = require('./handler');

var handle = {}
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/json'] = handler.json;

server.startServer(router.route, handle);

