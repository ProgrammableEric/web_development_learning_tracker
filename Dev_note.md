<h2>Frontend Development Note </2>

<h3>How are scripts loaded? </h3>
By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.
Browser parses the HTML elements in their apperance order in HTML file. Same for <code><script></code> element. If one script is dependant on another, then they will be loaded sequentically as well, causing a delay and bad user experience. 

<h3> defer, async </h3>
<p> <em>defer: </em> Browser loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file. --> When a script contains functionality that requires interaction with the DOM. 
<br><em>async: </em> The HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded.

<h3>Document Object Model: </h3> The DOM is a structural model of a web page that allows for scripting languages to access that page.
<img src="./notes_material/DOM3.png">
<img src="./notes_material/DOM.png"> 
<img src="./notes_material/DOM2.png">

<h3> Style property in css and js </h3>
To change the value of hyphenated style properties in JavaScript you must use camel case. For example, the <code>font-size</code> property will become <code>fontSize</code>.

<h3> On event objects and event handlers </h3>
JavaScript engines register events as objects with properties and methods associated with them.
<br>Event handlers are registered as properties of their event object.

<h3>.target property </h3>
the <code>.target</code> property to access the element that triggered the event.
<br>
<pre> 
<code>
let keyPlay = (key) => {
    key.target.style.backgroundColor = 'red';
}
let keyReturn = (key) => {
    key.target.style.backgroundColor = '';
}
let setKey = (note) => {
    note.onmousedown = keyPlay;
    note.onmouseup = keyReturn;
}
notes.forEach( setKey );
</code> 
</pre>

<h3>HandleBar</h3>
Include Handlebars: <code><script src="handlebars.min.js"></script> </code> 
<br> deliver a template to the browser: <code> <script id="templateB" type="text/x-handlebars-template">{{title}}</script> </code> 
<pre>
<code>
// use of HandleBar as template. 
const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context); 
document.getElementById("information").innerHTML = compiledHtml; 
</code>
</pre>

<h3>File system and Command Line </h3>
<b>cat and echo: </b> Cat is for listing content of any files of any kind. Echo is for listing value of some variable. Besides, cho without any value is used to insert a new line in many shell scripts.
<b>Navigation Map</b>
<img src="./notes_material/f_model1.png">
<b>ls -l</b>
<img src="./notes_material/f_model2.png">
<b>Redirection</b>
<img src="./notes_material/f_model3.png">
<b>Environment</b>
<img src="./notes_material/f_model4.png">
<b>Bash Script</b>
<img src="./notes_material/f_model5.png">

<h3>Git Revision </h3>
<img src="./notes_material/git_1.png">

<h3>BROWSER COMPATIBILITY AND TRANSPILATION </h3>
<b>ES6 and ES5: </b> ES6 is predictably backwards compatible, meaning all ES6 new features can be translated back to ES5 syntax for avioding compatability issues. Look up: <a href="https://caniuse.com/#home"> CanIUse.com </a>
<br><b>Transpilation: </b> Transpilation is the process of converting one programming language to another. In here specifically, ES6 -> ES5. 
<br><b></b>
