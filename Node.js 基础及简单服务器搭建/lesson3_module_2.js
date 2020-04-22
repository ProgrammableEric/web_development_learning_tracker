var stuff = require('./lesson3_module');

var pi = require('./lesson3_module').pi;

console.log(stuff.counter(['ruby', 'node.js', 'react']));
console.log(stuff.adder(3, 2));
console.log(stuff.pi);

console.log(pi);