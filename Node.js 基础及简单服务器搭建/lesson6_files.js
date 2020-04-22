var fs = require('fs');

fs.unlink("writeMe.txt", function(){
    console.log("file deleted ");
}); // 删除目录, 异步，同样的有对应同步函数

// fs.mkdirSync('stuff'); 
// fs.rmdirSync('stuff'); 

fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(){
            console.log('copy successfully');
        } )
    })
})

