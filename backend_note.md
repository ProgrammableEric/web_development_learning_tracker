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

### Sending Responses 
#### [Content Type]
In cases where the server is sending a data payload to the client, the server must include a `content-type` in the header of the response. This `content-type` header field alerts the client to the type of data it is sending in the response body. These content types are MIME Types, just as they are in the `accept` field of the request header. The `content-type` that the server sends back in the response should be one of the options that the client specified in the `accept` field of the request. e.g.
~~~
// GET Request
GET /articles/23 HTTP/1.1  
Accept: text/html, application/xhtml

// Server Response
HTTP/1.1 200 (OK)  
Content-Type: text/html
~~~

#### [Response Code]
Responses from the server contain status codes to alert the client to information about the success of the operation. 
Status code [look up](https://www.restapitutorial.com/httpstatuscodes.html)

- 200 (OK) This is the standard response for successful HTTP requests.

- 201 (CREATED) This is the standard response for an HTTP request that resulted in an item being successfully created.

- 204 (NO CONTENT) This is the standard response for successful HTTP requests, where nothing is being returned in the response body.

- 400 (BAD REQUEST) The request cannot be processed because of bad request syntax, excessive size, or another client error.

- 403 (FORBIDDEN) The client does not have permission to access this resource.

- 404 (NOT FOUND) The resource could not be found at this time. It is possible it was deleted, or does not exist yet.

- 500 (INTERNAL SERVER ERROR) The generic answer for an unexpected failure if there is no more sp

Expected response for each HTTP verb: 
-   GET — return 200 (OK)
-   POST — return 201 (CREATED)
-   PUT — return 200 (OK)
-   DELETE — return 204 (NO CONTENT) If the operation fails, return the most specific status code possible corresponding to the problem that was encountered.

## Express 
Express is a powerful but flexible Javascript framework for creating web servers and [APIs](https://en.wikipedia.org/wiki/Web_API). It can be used for everything from simple static file servers to JSON APIs to full production servers. 

- Express is a node module. Import frist when using it. 
```javascript
const  express  =  require('express');  // library import 
const  app  =  express();  // an instance of an Express application
```
- `app.listen()` takes port number and callback function as arguments, which will be called once the server is running and ready to receive responses. 
```javascript
const  PORT  =  4001;  
app.listen(PORT,  ()  =>  {  
	console.log(`Server is listening on port ${PORT}`); 
});
```
#### `Route`
Routes define the control flow for requests based on the request’s _path_ and HTTP verb. 
- `app.get()` to register routes to match `GET` requests. 
~~~javascript
const  moods  =  [{  mood:  'excited about express!'},  {  mood:  'route-tastic!'  }];  
app.get('/moods',  (req,  res,  next)  =>  {  
	// Here we would send back the moods array in response  
});
~~~
`localhost:4001/monsters` = host name + port number + path. 

The path is is part of the request that specifies where to locate the resources. 

HTTP follows a one request-one response cycle. Each client expects exactly one response per request, and each server should only send a single response back to the client per request.

- `send()` to send responses by 



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwMTUyMDIwNywtNDE5NTgzNjA0LDEzMj
M3NDc3NzEsLTI3MDA1MzE3Miw5MTIxMTQzNTcsMTU3NjI3NTU3
NCwtNjUxMDg3MDk4LC0yMDc2MjA1Nzc3LDkzNjUwNDk0NywtMT
QyNjUxODcxNSwxMDA1MTQzMTQ4LDk0NDcyOTczOV19
-->