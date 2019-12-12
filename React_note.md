<h1>Library and Framework </h1>

A Library is a bunch of reusable code. With a library, you are calling the library's code. However, a frame work is the sturcture of 
something that allow you to fill the important content to make the application complete based on the structure given. Using a 
framework means you are called by the framework' code. 
<a href="https://www.youtube.com/watch?v=LimOOe6I4eo">See this video </a>. 

<h1>First Look on React </h1>
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
An HTML-like JSX element is an element with a lower case tag name. In JSX, lower case tag names will be treated as HTML tags, while upper case tag names will be treated as a component instance. For instance, lower case <code> button </code> is treated as an HTML element, while upper case <code> Button </code> would be treated as a component instance of the Button class.
As a consequence of this, React components must always start with a capital letter, or will otherwise be treated as an HTML element. 
Attributes are interpreted differently as well. <code> button onClick={this.props.onClick} </code> - event handler for the HTML button element. <code> Button onClick={this.handleClick} </code> -
