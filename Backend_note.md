### The Web Server
A _web server_ is a process running on a computer that listens for incoming requests for information over the internet and sends back responses. 
_Protocal_ is the specific format of a request. (e.g., HTTP request) 

### The Application Server 
The collection of programming logic required to deliver dynamic content to a client, manage security, process payments, and myriad other tasks is sometimes known as the “application” or _application server_. 
The application server can be responsible for anything from sending an email confirmation after a purchase to running the complicated algorithms a search engine uses to give us meaningful results.
 
### API - Application Program Interface 接口
A **web API** is a collection of predefined ways of, or rules for, interacting with a web application’s data, often through an HTTP request-response cycle. API can be made public or internally limited access. 

### Authentication and Authorisation 
_Authentication_ is the process of validating the identity of a user. One technique for authentication is to use logins with usernames and passwords.
_Authorization_ controls which users have access to which resources and actions. Certain application views, like the page to edit a social media personal profile, are only accessible to that user. Other activities, like deleting a post, are often similarly restricted.

![Work flow](https://github.com/ProgrammableEric/web_development_learning_tracker/blob/master/notes_material/back_1.png)

### Backend Frameworks: [see](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks#A_few_good_web_frameworks)
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
`process.env` property is an object which stores and controls information about the environment in which the process is currently running. Common usage: 
```javascript
// set process.env.NODE_ENV to either development 
// or production 
if  (process.env.NODE_ENV  ===  'development'){ 
 console.log('Testing! Testing! Does everything work?');  
}
```
`process.memoryUsage()` returns information on the CPU demands of the current process. 

`process.argv` property holds an array of command line values provided when the current process was initiated. 






<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk1OTM1ODExLC0xMTEwNzE4Mjg4LC04NT
AzNDg5MzgsMTYzMDQ1NDM4OCwtNDk5ODkzMjg4LC0yNTgxNzc1
NzYsLTE5MzIzNTgxNDAsLTc5MTEzMDYzLC0xMTY4Njc3NTg5LC
0xNDUzMTQ1NjA4LC0yMDg5NTkwMTc0LC0xNTkzNTYyNTAyLC0x
MDMyNDk0MTMyLDExNDgyNTA2MDQsLTE2MTQyNDkxMzcsMTkyMT
c5MTg3LC0yMDg4NzQ2NjEyXX0=
-->