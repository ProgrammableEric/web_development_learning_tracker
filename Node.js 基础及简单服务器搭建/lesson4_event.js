// 事件

var events = require('events'); // 事件库

var myEmitter = new events.EventEmitter();  // 新增定义事件

myEmitter.on('someEvent', function(message){
    console.log(message);
})

myEmitter.emit('someEvent', 'the event was emitted');


// **********************************************************************

var util = require('util');

// 注意JS 类定义的特有写法，相当于 function Person(name) { ... }, 函数名及函数引用的变量
var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var tom = new Person('tom');
var jack = new Person('jack');
var ben = new Person('ben');

var person = [tom, jack, ben];
person.forEach(person => {
    person.on('speak', function(message) {
        console.log(person.name + " said: " + message);
    })
});

tom.emit('speak', 'hi');
jack.emit('speak', 'shit' );

