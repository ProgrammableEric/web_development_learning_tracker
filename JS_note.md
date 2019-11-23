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

<h3> Iterators</h3>
<p> <b>.forEach(): </b> in-place modification. 
  <br> <b>.map(): </b> return an array. 
  <br> <b>.filter(): </b> filtering out certain elements from the original array. Boolean callback function return. 
  <br> <b>.findIndex(): </b> returns a single value, either the first in the array that satisfies the condition, or -1 if there' none. 
  <br> <b>.reduce(): </b> Returns a single value after iterating through the array. Essentially, every iteration has the access to the <em>accumulator</em>, which will finally be returned. <a href="https://medium.com/@trekinbami/explanation-of-javascripts-reduce-with-a-real-world-use-case-f3f5014951e2"> example </a>
  <pre>
    <code>
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNums); // Output: 117
   </code>
   </pre>
    <br> <b>.some(), .every(): </b> Check if there are elements/ all elements that meet the requirement. Returns boolean. 
</p>

<h3> Js Objects </h3>
<p>
  <b>{}: </b> This is the representatio of object. Array of object can be <code>[{}, {}, {}] </code>. 
  <br><b>accessing a key' value: </b> <br>1. dot operator - same as other OOP languages. <br> 2. '[ ]' -> We *must* use bracket notation when accessing keys that have numbers, spaces, or special characters in them. <code> spaceship['Fuel Type'];   // Returns  'Turbo Fuel'</code>
  <br> <b>Const key word: </b> Object cannot be reassigned entirely, but still remain mutable. Use <code>delete objectName.propertyName </code> to delete a property. 
  <br> <b>for...in: </b> Each time the variable is set to objects key.  
  <pre>
  <code>
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
  </code>
  </pre>
  <b>Arrow function and <em>this</em> keyword: </b> Arrow function within objects does not recognise <code>this</code> keyword as referring to the object itself. Should avoid such use. If we must use arrow function, we do it by referring directly to the object name: instead of using <code>this</code>. 
  <pre>
  <code>
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${robot.energyLevel}%.`)
  }
}
  </code>
  </pre>
  <b><em>getter</em> and <em>setter</em> : </b> 1. Perform an action on the data when getting a property & return different values. 
  <br> 2. <code>this</code> keyword can be used. Retrieve properties that are private. 
  <br> 3. Invoke the method as accessing object's property. <code>object.getter_method </code>
  <br> 4. Checking if input/property is valid to use. 
  <br><b>Deconstructing assignment: </b> Save time from tedious keystrokes. USE A <code>{ }</code>e,g., <code>const residence = vampire.residence;  </code> ===> <code>const { residence } = vampire;  </code>. Also can be used to grad nested properties, such as <code>const { day } = vampire.preferences;  </code>
</p>
