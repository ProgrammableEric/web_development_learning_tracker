<h2>Frontend Development Note </2>

<h3>How are scripts loaded? </h3>
By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.
Browser parses the HTML elements in their apperance order in HTML file. Same for <code><script></code> element. If one script is dependant on another, then they will be loaded sequentically as well, causing a delay and bad user experience. 

<h3> defer, async </h3>
<p> <em>defer: </em> Browser loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file. --> When a script contains functionality that requires interaction with the DOM. 
<br><em>async: </em> The HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded.
