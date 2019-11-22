<h2>JS NOTE</h2> 

<h3> Passing by value vs. passing by reference</h3>
In Javascript, The only elements that are not objects are the Primitive Data Types : 
<b>string, number, boolean, null and undefined. </b>Primitive Data Types are passed <i>By Value</i> 
and Objects are passed <i>By Reference</i>. 

<h3> var, const, let</h3>
<p> <em>var: </em>Prior to ES6 standard, was the only keyword for declaring variables.
<br> <em>const: </em>a const variable cannot be reassigned because it is constant. 
<br> <em>let: </em> variable can be reassigned a different value. </p> 

<h3> Function as data</h3>
<p> <b>Two major usages: </b> 1. It enables passing functions as parameter to other functions. -> higher order function (function that either accepts a function as parameter or returns functions as output, or both.)
<br> <b>Anonymous function invoking: </b>
<pre>
<code>
timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});
</code>
</pre>
2. There are cases where we write something like function1 = function2 to use the name function1 as a synonym for function2 when the name function1 is for some reason easier to type/remember than function2.</p>
