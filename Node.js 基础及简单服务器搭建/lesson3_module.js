// 模块

var counter = function(arr) {
    return "There are " + arr.length + " elements in the array";
}

var adder = function(a, b) {
    return `sum is ${a+b}.`;
}

// console.log(counter(['ruby', 'node.js', 'react']));

var pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
}