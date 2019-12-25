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

## REST System [link](https://www.codecademy.com/paths/web-development/tracks/javascript-back-end-development/modules/learn-express-create-a-server/articles/what-is-rest)
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. - _RESTful systems_

### Seperation of client and server

Separating the user interface concerns from the data storage concerns, we improve the flexibility of the interface across platforms and improve scalability by simplifying the server components. Additionally, the separation allows each component the ability to evolve independently.

### Statelessness

The server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages. This constraint of statelessness is enforced through the use of _resources_, rather than _commands_. Resources are the nouns of the Web - they describe any object, document, or _thing_ that you may need to store or send to other services. 

### Communication between client and server

In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests.

see [this link](https://www.codecademy.com/paths/web-development/tracks/javascript-back-end-development/modules/learn-express-create-a-server/articles/what-is-rest) for details. 

#### [making request]
REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

-   an HTTP verb, which defines what kind of operation to perform
-   a  _header_, which allows the client to pass along information about the request
-   a path to a resource
-   an optional message body containing data

#### [HTTP Verbs]
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

-   GET — retrieve a specific resource (by id) or a collection of resources
-   POST — create a new resource
-   PUT — update a specific resource (by id)
-   DELETE — remove a specific resource by id

[read more](https://www.codecademy.com/articles/what-is-crud)

#### [Headers and Accept parameters]
`Accept` field: type of content that it is able to reveive from the server. Consisting of `type` and `subtype`. e.g., `text/html, text/css, img/png` etc. 

 Available options see [this doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). 

#### [Path]
A path like `fashionboutique.com/customers/223/orders/12` is clear in what it points to. We can see that we are accessing the order with `id` 12 for the customer with `id` 223.

Paths should contain the information necessary to locate a resource with the degree of specificity needed. When referring to a list or collection of resources, it is unnecessary to add an `id` to a POST request to a `fashionboutique.com/customers` path would not need an extra identifier, as the server will generate an `id` for the new object.



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU3NTU4OTkwLDkzNjUwNDk0NywtMTQyNj
UxODcxNSwxMDA1MTQzMTQ4LDk0NDcyOTczOV19
-->