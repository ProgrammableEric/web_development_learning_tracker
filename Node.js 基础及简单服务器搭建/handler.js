var fs = require('fs');

function home(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
}

function review(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
}

function json(response, params) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    // var jsonObj = {
    //     writer: 'John',
    //     song: 'Stop this train',
    //     query: JSON.stringify(params),
    // }
    response.end(JSON.stringify(params));
}

module.exports = {
    home: home,
    review: review,
    json: json
}