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

# REST System [link](https://www.codecademy.com/paths/web-development/tracks/javascript-back-end-development/modules/learn-express-create-a-server/articles/what-is-rest)
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

# Express 
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
### `Route`
Routes define the control flow for requests based on the request’s _path_ and HTTP verb. 

#### [ `GET` ] 
`app.get()` to register routes to match `GET` requests. 
~~~javascript
const  moods  =  [{  mood:  'excited about express!'},  {  mood:  'route-tastic!'  }];  
app.get('/moods',  (req,  res,  next)  =>  {  
	// Here we would send back the moods array in response  
});
~~~
`localhost:4001/monsters` = host name + port number + path. 

The path is is part of the request that specifies where to locate the resources. 

HTTP follows a one request-one response cycle. Each client expects exactly one response per request, and each server should only send a single response back to the client per request.

#### [ `res.send()` ]
`send()` to send responses by the Express server. 
~~~javascript
const  monsters  =  [{  type:  'werewolf'  },  {  type:  'hydra'  },  {  type:  'chupacabra'  }];  
app.get('/monsters',  (req,  res,  next)  =>  {  
	res.send(monsters);  
});
~~~
`.json()` can be used to explicitly send JSON-formatted responses. `.json()` sends any JavaScript object passed into it.

#### [ Matching Route Paths ]
Express tries to match requests by route, meaning that if we send a request to  `<server address>:<port number>/api-endpoint`, the Express server will search through any registered routes in order and try to match  `/api-endpoint`.

Express searches through routes **in the order that they are registered in your code**. The first one that is matched will be used, and its callback will be called.

If there are no matching routes registered, or the Express server has not sent a response at the end of all matched routes, it will automatically send back a 404 Not Found response, meaning that no routes were matched or no response was ultimately sent by the registered routes.

#### [ Route parameters ]
Parameters are route path segments that begin with `:` in their Express route definitions. `/monsters/:id` will match both`/monsters/1` and `/monsters/45`. They will match any tex at that path segment. 

Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: `req.params`. This object’s keys are any parameter names in the route, and each key’s value is the actual value of that field per request. 
~~~javascript
const  monsters  =  {  hydra:  {  height:  3,  age:  4  },  dragon:  {  height:  200,  age:  350  }  };  
// GET /monsters/hydra  
app.get('/monsters/:name',  (req,  res,  next)  =>  {  
	console.log(req.params)  // { name: 'hydra' };  
res.send(monsters[req.params.name]);  });
~~~

#### [ Matching with HTTP verbs ]
Express also matches request with routes that have the correct http verbs. A `GET` and a `app.put()` does not match and express will stop comparing the rest of the route path. d

#### [Setting Status Code]
Default is 200(OK). 
~~~javascript
const  monsterStoreInventory  =  {  fenrirs:  4,  banshees:  1,  jerseyDevils:  4,  krakens:  3  };  

app.get('/monsters-inventory/:name',  (req,  res,  next)  =>  {  
	const  monsterInventory  =  	monsterStoreInventory[req.params.name];  
	if  (monsterInventory)  {  
		res.send(monsterInventory);  }  
	else  {  
		res.status(404).send('Monster not found');  
	}  
});
~~~

#### [ `PUT` ]
`PUT` Updates existing resources. 

Use of [query string](https://en.wikipedia.org/wiki/Query_string): A web server can handle a [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") request either by reading a file from its [file system](https://en.wikipedia.org/wiki/File_system "File system") based on the [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator "Uniform Resource Locator") path or by handling the request using logic that is specific to the type of resource. In cases where special logic is invoked, the query string will be available to that logic for use in its processing, along with the path component of the URL. 

Query strings do not count as part of the route path. Instead, the Express server parses them into an object and attaches it to the request body as `req.query`. The `key: value` relationship is indicated by the `=` character in a query string, and key-value pairs are separated by `&`. In the above example route, the `req.query` object would be `{ name: 'chimera', age: '1' }`. 

```javascript
const  monsters  =  {  '1':  {  name:  'cerberus',  age:  '4'  }  };  
// PUT /monsters/1?name=chimera&age=1  
app.put('/monsters/:id',  (req,  res,  next)  =>  {  
	const  monsterUpdates  =  req.query;
	monsters[req.params.id]  =  monsterUpdates;  		
	res.send(monsters[req.params.id]);  
});
```

#### [`POST`] - 201(Created)
`POST` is the HTTP method verb used for creating new resources. Because `POST` routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created. 
~~~javascript
app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});
~~~

#### [`DELETE`] - 204 (No Content)
`DELETE` is the HTTP method verb used to delete resources. Because `DELETE` routes delete currently existing data, their paths should usually end with a route parameter to indicate which resource to delete.
~~~javascript
app.delete('/expressions/:id', (req, res, next) => {
  const index = getIndexById(req.params.id, expressions);
  if (index !== -1){
    expressions.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})
~~~

~~~javascript
// Complete code of the CRUD server 
const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// Add your DELETE handler below:
app.delete('/expressions/:id', (req, res, next) => {
  const index = getIndexById(req.params.id, expressions);
  if (index !== -1){
    expressions.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
~~~

### Routers
An Express router provides a subset of Express methods. To create an instance of one, we invoke the `.Router()` method on the top-level Express import.
~~~javascript
// example code 
const  express  =  require('express');  
const  app  =  express();  
const  monsters  =  {  '1':  {  name:  'godzilla',  age:  250000000  },  '2':  {  Name:  'manticore',  age:  21  }  }  

const  monstersRouter  =  express.Router();  
app.use('/monsters',  monstersRouter);  // KEY LINE HERE !!!
monstersRouter.get('/:id',  (req,  res,  next)  =>  {  
	const  monster  =  monsters[req.params.id];  
	If  (monster)  {  res.send(monster);  
	}  else  {  
		res.status(404).send();  
	}  
})
~~~







<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAwMTU2MjAzNiwyMDExNzgzNzA0LDE2Nj
U1NjEyLC03Mjc3NTQwNDMsLTEyNDE4NTAzMDQsMTAwODE5MjU0
Nyw4NDE4OTY1MTYsLTE1MzM5OTk0NDUsLTExMTk0NzAzNTQsMj
AyNTE1NjMwMCwxODIwOTcyNzYwLC0xOTY0NDYxODg5LC0yMDcw
MjU5NzQ2LDIwNzM2OTE4MiwxMjM5MTE0OTczLC00MTk1ODM2MD
QsMTMyMzc0Nzc3MSwtMjcwMDUzMTcyLDkxMjExNDM1NywxNTc2
Mjc1NTc0XX0=
-->