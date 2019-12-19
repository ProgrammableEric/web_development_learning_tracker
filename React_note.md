<h2>Library and Framework </h2>

A Library is a bunch of reusable code. With a library, you are calling the library's code. However, a frame work is the sturcture of 
something that allow you to fill the important content to make the application complete based on the structure given. Using a 
framework means you are called by the framework' code. 
<a href="https://www.youtube.com/watch?v=LimOOe6I4eo">See this video </a>. 

<h2>First Look on React </h2>
<a href="https://www.youtube.com/watch?v=CKSBlLFdtlI">An intro video </a>.
<h2>JSX</h2>
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML. If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
<h3>JSX Element </h3> 
<ul>
  <li>Elements are treated as JavaScript expressions, meaning that a JSX element can be saved in a variable, passed to a function, stored in an object or array…</li>
  <li>Wrap multi-lined JSX element into <code>( )</code></li>
  <li>a JSX expression must have exactly one outermost element.</li>
  <li><code>ReactDOM.render(JSX element, document.getElementById('app'));</code> </li> 
  <li><b>Virtual DOM: </b> React has Virtual DOM as a blueprint of the real DOM. Manipulating Virtual DOM is much faster than real DOM. <a href="https://www.codecademy.com/articles/react-virtual-dom">example1 </a>, <a href="https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/">example2 </a></li>.  
  <li><code>className</code> instead of <code>class</code></li>
  <li>JSX must include self-closing tag. <code>br, img ...</code></li>
  <li>Use <code>{ }</code> to include JS code in JSX element. Everything inside of the curly braces will be treated as regular JavaScript.</li>
  <li><b>Conditionals & If statement:</b> Use if statement outside the React element / use <code>... ? ... : ...</code> / <code>&& </code> operator.</li> 
</ul>

## React
<h3>React Component</h3>
<ul>
  <li>Create a component class by subclassing <code>React.Component</code>. e.g. <code>class YourComponentNameGoesHere extends React.Component {} </code> </li>
  <li>JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two.That is the React-specific reason why component class names must begin with capital letters. </li>
  <li>Differentiate between <b>JSX component</b> and <b>React Component</b>: 
    <ul>
      <li>small letters vs. capital letter class name </li>
      <li>wrapped around <code>( )</code> vs. instantiated from a component class</li>
      <li>In rendering the component, use variable name vs. use <code>< ></code> with class name. </li>
      <li>In React component, everything inside <code>render(){}</code>.</li>
      <li><code>this</code> keyword in defining React component class. It refers to the object on which <code>this</code>‘s enclosing method, in this case <code>.render()</code>, is called. It is almost always th instance of the class.</li>
    </ul>
  </li>
</ul>
    
<h3>HTML-like JSX element</h3>
An HTML-like JSX element is an element with a lower case tag name. In JSX, lower case tag names will be treated as HTML tags, while upper case tag names will be treated as a component instance. For instance, lower case <code>button</code>  is treated as an HTML element, while upper case <code> Button </code> would be treated as a component instance of the Button class.
As a consequence of this, React components must always start with a capital letter, or will otherwise be treated as an HTML element. 
<br>Attributes are interpreted differently as well. <code> button onClick={this.props.onClick} </code> - event handler for the HTML button element. <code> Button onClick={this.handleClick} </code> - attribute "onClick" for component "Button", which gets passed a attribute value "this.handleClick". 

### I'm a quick note to Markdown ... 
As I need to make some good notes at the stage of learning. Here are [Some reference](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) and [A good editor](https://pandao.github.io/editor.md/en.html).  And another [good editor](https://stackedit.io/app#). 
I think that is enough for now. End note ...  
Hang on, btw, hit two `blanks` at the end of the last line, if you wanna make a  `<br>`.   
That's it I guess. 

### React Component `Props` and `state`	
`Props` and `state` are the only two ways to represent dynamic information in react components. Besides them, every value used in a component should always stay exactly the same. 
#### `this.props`    
-   Passing a prop by giving an  _attribute_  to a component instance
-   Accessing a passed-in prop via  `this.props.prop-name`
-   Using a prop to make decisions about what to display 
-   Defining an event handler in a component class
-   Passing an event handler as a prop, notice the naming convention 
-   Receiving a prop event handler and attaching it to an event listener
-   `this.props.children` returns everything in between the open and close component tag. If count more than 1, the return is in array type. 
-   `getDefaultProps` set up default behaviour if no properties are given when rendering the component. 
#### `state`
- `state` is not passed from outside. A component decides its own state.
~~~javascript
class  Example  extends  React.Component  {  
	constructor(props)  {  		
		super(props);  
		this.state  =  {  weather:  'sunny'  };
		// Bind "this" to the setState function. 
		this.makeSomeFog  =  this.makeSomeFog.bind(this);  
}  

makeSomeFog()  {  
	this.setState({ weather: 'foggy' }); } 
 } 
~~~
- `this.setState()`automatically calls render
- `this.setState()` can't be used directly in `render()`method. It causes the two method calling each other indefinitely. 
```javascript
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}
```

#### `const {}` 
```javascript
const {BrowserWindow} = require('electron')
```
Above works for ES6. If the object if defined as: 
```javascript
const obj = {
    email: "hello@gmail.com",
    title: "Hello world"
}
```
We can use the curly braces to grab field of object directly by: 
```javascript
const { email,title } = obj;
```

#### Programming Pattern
-  **Three design patterns:** 
    - Stateful parent passing information to a stateless, child component. 
   -  Stateless child component update the state of the parent component. ( by passing and calling the event handler )
   - Child components update sibling components (thru parent passing)
   
- A component should never update its own `this.props`.
- **A React component should use  `props`  to store information that can be changed, but can only be changed by a  _different_  component.**
- **A React component should use  `state`  to store information that the component itself can change.**
- Passing handler methods: Do it without `()`. Passing method with `()` means to actually **calling** it. However, in dealing with handler methods we only need to pass the method as a parameter/object. 
~~~javascript
// Parent.js
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this); // binding "this" with the component itself. 
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}
---------------------------------------------------------------
// Child.js
export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {  // new method to handle parameter passing into `.onChange()` 
    const name = e.target.value;
    this.props.onChange(name);
  }
  
  render() {
  ......
  }
~~~
- A component should only have one job 
- Seperate multi-tasking components - one stateless component _display_ information, and a different stateless component offer the ability to _change_ that information.

### Event Handling 
`.bind()`   参考笔记 [link](https://juejin.im/post/59093b1fa0bb9f006517b906)
- keeps the context of `this` within another function. 
- bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
~~~javascript
// 指定this 的指向
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind(foo); 

bindFoo(); // 1
~~~
`call()` 参考笔记 [link](https://github.com/mqyqingfeng/Blog/issues/11)

- call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
~~~javascript
// 指定 this 的指向
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); 
// 输出： 1
// 1.call 改变了 this 的指向，指向到 foo 
// 2.bar 函数执行了
// 相当于： 
Function.prototype.call2 = function(context) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    context.fn();
    delete context.fn;
}
~~~
~~~javascript
// call 给定指定参数，参数个数可以不定
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call(foo, 'kevin', 18);
// 输出：kevin 18 1
~~~
~~~javascript
// this 参数可以传 null，当为 null 的时候，视为指向 window
var value = 1;

function bar() {
    console.log(this.value);
}

bar.call(null); // 1
~~~
~~~javascript
// 最终模拟实现
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}
~~~

`apply()` 参考笔记 [link](https://github.com/mqyqingfeng/Blog/issues/11)
~~~javascript
// 与 call() 相似，直接给模拟实现代码：
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
~~~

## Authentication and OAuth
#### types of authentication 
- **Password** Application's server checks the supplied credentials to determine user's right to access certain part of the information. _typical use:_ _authentication token_, which prevents continuouly logging in. The token expires after a certain amount of time. 
- **API Keys** Generate API key when the developer registers their application. Here the developer's app is the application that asks for authentication from the public API. It is used by the API to block that application’s API key and prevent further malicious use of the API by that application if needed. 
- **OAuth** OAuth is an **open standard** and is commonly used to grant permission for applications to access user information without forcing users to give away their passwords.   Each API is required to implement their own version of OAuth and therefore may have a slightly different implementation or flow
#### Generic OAuth workflow 
Ask user for servie selection 
-> user redirected to service login 
-> redirected back to the original site along with the _access token_ 
-> access token be included in the following app requests. 

#### CORS and CORS Anywhere [link](https://juejin.im/post/5a7359876fb9a0634a38e389)
**CORS** 
考虑到安全问题，在跨域标准化之前，如果你想调用一个节点在不同域的API, 是不存在的。这种调用，会因为 Same-Origin 政策被阻止。
**目的：** 第一，使你所发出的请求能代表你自身； 第二， 阻止那些流氓JS发出的请求； 第三，这种机制会被激活，无论何时你发送请求到:     

1). 不同的域名。(eg. 应用在 [example.com](http://www.example.com/) 调用 [api.com)](http://www.api.com)/)

2). 不同的子域名。(eg. 应用在 [example.com](http://www.example.com/)  调用  [api.com)](http://www.api.com)/)  

3). 不同的端口。(eg. 应用在  [example.com](http://www.example.com/)  调用  example.com:3001)  

4). 不同的协议。(eg. 应用在  [example.com](https://example.com/)  调用  [example.com)](http://example.com)/)

通过这种机制，我们能够阻止黑客的脚本攻击，以防当你登陆，比如银行网站，的时候替换你的验证信息。

#### User Agent [source]([https://en.wikipedia.org/wiki/User_agent](https://en.wikipedia.org/wiki/User_agent))
In computing, a **user agent** is software (a [software agent](https://en.wikipedia.org/wiki/Software_agent "Software agent")) that is acting on behalf of a [user](https://en.wikipedia.org/wiki/User_(computing) "User (computing)"), such as a [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser") that "retrieves, renders and facilitates end user interaction with Web content".[[1]](https://en.wikipedia.org/wiki/User_agent#cite_note-1) An email reader is a [mail user agent](https://en.wikipedia.org/wiki/Mail_user_agent "Mail user agent").
The [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") (HTTP) identifies the client software originating the request, using a user-agent header, even when the client is not operated by a user.
**User agent identification** When a software agent operates in a network protocol, it often identifies itself, its application type, [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system"), software vendor, or software revision, by submitting a characteristic identification [string](https://en.wikipedia.org/wiki/String_(computer_science) "String (computer science)") to its operating peer. In [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"),[[3]](https://en.wikipedia.org/wiki/User_agent#cite_note-rfc7231-3) SIP,[[2]](https://en.wikipedia.org/wiki/User_agent#cite_note-rfc3261-2) and NNTP[[4]](https://en.wikipedia.org/wiki/User_agent#cite_note-4) protocols, this identification is transmitted in a header field _User-Agent_. [Bots](https://en.wikipedia.org/wiki/Internet_bot "Internet bot"), such as Web crawlers, often also include a [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator "Uniform Resource Locator") and/or [e-mail address](https://en.wikipedia.org/wiki/E-mail_address "E-mail address") so that the [Webmaster](https://en.wikipedia.org/wiki/Webmaster "Webmaster") can contact the operator of the bot. 

## Advanced React and More Programming Patterns 
### In-line Style
- In regular JavaScript, style _names_ are written in hyphenated-lowercase, In React, those same names are instead written in camelCase: 
~~~javascript
// regular JS 
const  styles  =  {  
'margin-top':  "20px",  
'background-color':  "green"  
};
// React 
const  styles  =  {  
marginTop:  "20px",  
backgroundColor:  "green"  
};
~~~
- In regular JS, style  _values_  are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write  `"450px"`  or  `"20%"`. In React, if you write a style value as a  _number_, then the unit  `"px"`  is assumed.
- style can be saved to a seperate js file, exported and reused: 
~~~javascript
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://codecademy-content.s3.amazonaws.com/programs/react/images/welcome-to-my-homepage.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
}
~~~

### Separating _presentational components_ from _display components._
If a component has to have `state`, make calculations based on `props`, or manage any other complex logic, then that component shouldn’t _also_ have to render HTML-like JSX. Instead of rendering HTML-like JSX, the component should render another component. It should be _that_ component’s job to render HTML-like JSX. 
It essentially separates your _business logic_ from your _presentational logic_, which is a [Good Thing](http://www.dictionary.com/browse/good-thing).

### Stateless functional components 
Write presentational classes as Javascript function instead of React component class: 
~~~javascript
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

// substitute way of write the component: 
export const GuineaPigs = (props) => {
  return (
    <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={props.src} />
      </div>
  ); 
}
~~~

### propTypes (refer to [this document](https://www.npmjs.com/package/prop-types))

Use for two reasons: 1. prop validation 2. documentation 
~~~javascript
Runner.propTypes = {
  message:   React.PropTypes.string.isRequired, // get console warning of the required field is not sent. 
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};
// for stateless functional components 
const  Example  =  (props)  =>  {  
	return  <h1>{props.message}</h1>;  
}  
Example.propTypes  =  {  
message:  React.PropTypes.string.isRequired  
};
~~~

### React Forms 
In a React form, unlike in usual HTML forms, you want the server to know about every new character or deletion, _as soon as it happens_.
~~~javascript
// example code 
export class Input extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState( {userInput: e.target.value} ); 
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} 
          value={this.state.userInput} /> // value is used to store test in the input box in real time for other application to use. 
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
~~~
### Controlled and Uncontrolled Components
An _uncontrolled component_ is a component that maintains its own internal state. (e.g. React form has its own record of the input value) 

A _controlled component_ is a component that does not maintain any internal state. (no memory on its own, most of React components are like this )

### Lifecycle Method
_Lifecycle methods_ are methods that get called at certain moments in a component’s life. 
**mounting** A component renders **for the first time.** This is when mounting lifecycle methods get called. 
- `componentWillMount` called first
- `render` called afterwards 
- `componentDidMount` called lastly 

**updating**
**unmounting**






 
  
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc2MDMwNjY0MiwtMTMzNjMzMDk5NywxND
k5MzM3NDY5LC05NjQyMjE5NzMsLTE4MTk1NzUyMjksLTIwMzAw
OTUxNzcsNjE5MjM4NTk4LDk4NjE3NzUyMSwtOTg1NjU0MTEzLD
EyMTY1MzA2OSwxMjY2Njc1MzQyLDE1MTU3OTg1MDYsLTg0MTU2
OTQ4OCwxNTMxMDEyNTI0LC01Mjk0ODg4MDAsODQ4NTE1NzY4LC
0xMDI0MDkyMzQxLC0xNDU1MTczMzUyLC04MzA4NTg0MSwyMDQ5
OTYwMDQ5XX0=
-->