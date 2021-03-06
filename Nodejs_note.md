## Node.js
Node.js is a JavaScript _runtime_, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime” converts code written in a _high-level_, human-readable, programming language and compiles it down to code the computer can execute. 

### REPL 
[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) is an abbreviation for **r**ead–**e**val–**p**rint **l**oop. It’s a program that **l**oops, or repeatedly cycles, through three different states: a **r**ead state where the program **r**eads input from a user, the **e**val state where the program **e**valuates the user’s input, and the **p**rint state where the program **p**rints out its evaluation to a console. Then it **l**oops through these states again. 

**Use of REPL**  A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.

### Node.js in detail 
#### Global object
The Node environment contains a number of Node-specific global elements in addition to those [built into the JavaScript language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). Every Node-specific global property sits inside the [the Node  `global`  object](https://nodejs.org/api/globals.html). This object contains a number of useful properties and methods that are available anywhere in the Node environment.

There's not `Window` object in Node.js since only the broswer holds the DOM. Here we don't. 

#### Process object 
In computer science, a _process_ is the instance of a computer program that is being executed.

环境变量们 `process.env` property is an object which stores and controls information about the environment in which the process is currently running. Common usage: 
```javascript
// set process.env.NODE_ENV to either development 
// or production 
if  (process.env.NODE_ENV  ===  'development'){ 
 console.log('Testing! Testing! Does everything work?');  
}
```
`process.memoryUsage()` returns information on the CPU demands of the current process. 

可用命令们 `process.argv` property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.
```javascript
console.log(process.argv[3]);  // Prints 'several'
```

[further documentation]([https://www.wolframalpha.com/input/?i=sinx+%3D+0.52](https://www.wolframalpha.com/input/?i=sinx+%3D+0.52))

#### Core module and Local module 
- `require()` a module 
- Node has several modules included within the environment to efficiently perform common tasks. These are known as the **_core modules_**.
```javascript
// Require in the 'events' core module:  
let  events  =  require('events');
```
- We can use the same `require()` function to require modules of our own creation.
 To handle these different tasks, the `require()` function includes some interesting logic “under the hood.” The `require()` function will first check to see if its argument is a core module, if not, it will move on to different attempts to locate it.
Below, in the **dog.js** file, we assign the `Dog` class as the value of `module.exports`. Each JavaScript file in the Node environment has a special JavaScript object called `module.exports`. It holds everything in that file, or module, that’s available to be required into a different file.
```javascript
// export your own local module 
module.exports  =  class Dog {  
	constructor(name)  { 
	 this.name  =  name;  
	}  
	praise()  {  
		return  `Good dog, ${this.name}!`;  
	}  
};

// app.js, require a local Dog module 
let  Dog  =  require('./dog.js');  
const  tadpole  =  new  Dog('Tadpole');  
console.log(tadpole.praise());
```

#### Node Package Manager [NPM](https://www.npmjs.com/) 

#### Event-driven Architecture 
It is needed because, when we write web applications, we often need to write logic to handle situations without knowing exactly when they’ll occur. For example, when programming a website, we might provide functionality for a click event without knowing when a user will trigger it.

`EventEmitter` access by requiring in the `events` core module. 
```javascript
// Require in the 'events' core module  
let  events  =  require('events');  

// Create an instance of the EventEmitter class  
let  myEmitter  =  new  events.EventEmitter();
```
- `.on()` The `.on()` method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.
- `.emit()` The `.emit()` method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.

```javascript
let  newUserListener  =  (data)  =>  {  
	console.log(`We have a new user: ${data}.`);  
};  // Assign the newUserListener function as the listener callback for 'new user' events  

myEmitter.on('new user',  newUserListener)  
// Emit a 'new user' event  

myEmitter.emit('new user',  'Lily Pad')  
//newUserListener will be invoked with 'Lily Pad'
```

#### Asynchronous JS with Node.js 
**How it works ?** Node provides a number of APIs for performing asynchronous tasks which expect callback functions to be passed in as arguments. Under the hood, these APIs trigger the subscription to and emitting of events to signal the completion of the operation. When the operation completes, the callback function is added to a queue, or line, of tasks waiting for their turn to be executed. When the current stack, or list, or synchronous tasks finish executing, the operations on the queue will be performed.
```javascript
let keepGoing = true;

let callback = () => {
  keepGoing = false;
};

setTimeout(callback, 1000); // Run callback after 1000ms

// The while loop will run forever cuz it comes before the 
// callback function up on the stack. The callback function will never be called. 
while(keepGoing === true) {
  console.log(`This is the song that never ends.`)
};

This while-loop will continue forever! Even though the callback changing the  `keepGoing`  variable to  `fa`
```
For that reason, we could replace the while-loop with an asynchronous function. For example, `promises` or `setInterval()`. 

#### User Input/Output 
- `console.log()` is a “thin wrapper” on the `.stdout.write()` method of the `process` object. `stdout` stands for standard output.
- In Node, we can also receive input from a user through the terminal using the `stdin.on()` method on the `process` object:
```javascript
process.stdin.on('data', (userInput) => {  
	let  input  =  userInput.toString()  
	console.log(input)  
});
```
Here, we were able to use `.on()` because under the hood `process.stdin` is an instance of `EventEmitter`. When a user enters text into the terminal and hits enter, a `'data'` event will be fired and our anonymous listener callback will be invoked. The `userInput` we receive is an instance of [the Node  `Buffer`  class](https://nodejs.org/api/buffer.html#buffer_buffer), so we convert it to a string before printing.

#### Errors 
The usual `try...catch` statements do not always work since it is synchronous. e.g., 
```javascript
// the usual callback function 
naiveErrorProneAsyncFunction: (input, callback) => {
    console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
    setTimeout(() => {
      if (input === 'problematic input') {
        throw new Error('whoops')
      } else {
        let responseData = `Received valid input "${input}"`
        callback(responseData)
      }
    }, 0)
}

// This is not gonna catch the error 
try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
  console.log(`Something went wrong. ${err}\n`);
}
```
Many asynchronous Node APIs use **_error-first callback functions_**: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be `undefined`.
```javascript
// err: gets passed if async tasks results in an error, otherwise it will be _undefined_ 
const  errorFirstCallback  =  (err,  data)  =>  {  
	if  (err)  {  
		console.log(`There WAS an error: ${err}`);  
	}  else  {  
	// err was falsy  
		console.log(`There was NO error. Event data: ${data}`);  
	}  
}

api.errorProneAsyncApi('problematic input', errorFirstCallback);
```

#### Filesystem (`fs` core module)
In the back-end, however, less restricted interaction with the filesystem is essential. The Node `fs` core module is an API for interacting with the **f**ile **s**ystem. It was modeled after the [POSIX](https://en.wikipedia.org/wiki/POSIX) standard for interacting with the filesystem.

Each method available through the `fs` module has a synchronous version and an asynchronous version. One method available on the `fs` core module is the `.readFile()` method which **read**s data from a provided **file**:
~~~javascript
const  fs  =  require('fs');  
let  readDataCallback  =  (err, data) => {  
  if (err) {  
	  console.log(`Something went wrong: ${err}`);
  } else {  
	  console.log(`Provided file contained: ${data}`); 
  }  
};  
fs.readFile('./file.txt',  'utf-8',  readDataCallback);
~~~
We invoked the `.readFile()` method with three arguments:

1.  The first argument is a string that contains a path to the file  **file.txt**.
2.  The second argument is a string specifying the file’s  [character encoding](https://en.wikipedia.org/wiki/Character_encoding)  (usually ‘utf-8’ for text files).
3.  The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of  **file.txt**  into the provided callback as its second argument.

#### Readable Streams (`readline` core module)
Read files line-by-line: 
~~~javascript
const  readline  =  require('readline');  
const  fs  =  require('fs');  

const  myInterface  =  readline.createInterface({  
	input:  fs.createReadStream('text.txt')
});  

myInterface.on('line', (fileLine)  =>  {  
	console.log(`The line read: ${fileLine}`);
});
~~~
#### Writable Streams (`fs.createWriteStream()`)
Combine reading and writing file streams: 
~~~javascript
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

function transformData(line) {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData); 
~~~

#### Create an HTTP server (the `http` module)
The  `http.createServer()`  method returns an instance of an  `http.server`. An  `http.server`  has a method  `.listen()`  which causes the server to “listen” for incoming connections. When we run  `http.createServer()`  we pass in a custom callback function (often referred to as the  `requestListener`). This callback function will be triggered once the server is listening and receives a request.

Let’s break down how the  `requestListener`  callback function works:

-   The function expects two arguments: a request object and a response object.
-   Each time a request to the server is made, Node will invoke the provided  `requestListener`  callback function, passing in the request and response objects of the incoming request.
-   Request and response objects come with a number of properties and methods of their own, and within the  `requestListener`  function, we can access information about the request via the request object passed in.
-   The  `requestListener`  is responsible for setting the response header and body.
-   The  `requestListener`  must signal that the interaction is complete by calling the  `response.end()`  method.
~~~javascript
const  http  =  require('http');  
let  requestListener  =  (request,  response)  =>  { 
	response.writeHead(200, {'Content-Type': 'text/plain'});  
	response.write('Hello World!\n');  
	response.end();  
};  
const  server  =  http.createServer(requestListener);  
server.listen(3000);
~~~

#### 回调函数 [call back function 讲解](https://juejin.im/post/5dc1474df265da4d1518ee76)
回调函数是一个函数，将会在另一个函数完成执行后立即执行。回调函数是一个作为参数传给另一个 JavaScript 函数的函数。这个回调函数会在传给的函数内部执行。**回调函数本质上是异步的**
~~~javascript
// 回调函数处理异步进程
// 对比1: getMessage 若涉及等待服务器响应，则结果未知
function getMessage() {
	console.log('Got message');
}

function displayMessage() {
	console.log('Displayed message');
}

getMessage();
displayMessage();

// 对比2： 运用call back funciton 
function getMessage(msg, callback) {
	setTimeout(function() {
		console.log(msg);
		callback();
	}, 2000);	
}

function displayMessage() {
	console.log('Displayed message');
}

getMessage('Hi there', displayMessage);

// prints out: 'Hi there'
//             'Displayed message'
~~~
- `displayMessage` 引用传递 / `displayMessage()` 函数调用
-  回调地狱: 回调函数的套用使得代码难以理解，修改和维护
~~~javascript
http.get('https://api.github.com/users',  function(users) {  
/* Display all users */  
	console.log(users); http.get('https://api.github.com/repos/javascript/contributors?q=contributions&order=desc',  function(contributors) {  
	/* Display all top contributors */  
	console.log(contributors); 
	http.get('https://api.github.com/users/Jhon',  function(userData) {
	/* Display user with username 'Jhon' */  
	console.log(userData); }); 
	}); 
});

作者：前端先锋  
链接：https://juejin.im/post/5dc1474df265da4d1518ee76  
~~~





<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczMTc0MzIxLC00MjM1MDIxMzYsLTY1OD
c3NzQxNCwtMTgxODE3OTc1Miw4NjI2Njc3MjAsLTExMjA1NDk3
NjMsLTI4NjEwNjMyOCwyOTg3NzUxNDUsOTA3MTUxMDY2LC0xND
g2NTY4NzIzLC0xNDAxNjExNDcxLDQzMzIwNzEzMCw4Nzc4NzE4
ODgsLTUxNzgxMTk3MywxMDc5MzEzOTc5LC0yMDIyNDMwMTUsLT
k1MzMxNDYxNiw3OTY0MjE0MTQsMTAzNDc1ODY1Miw1ODU3MjQx
OTJdfQ==
-->