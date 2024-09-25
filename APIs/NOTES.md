<h1 align="center"> Application Programming Interfaces (APIs) </h1> 

### 1. What is An API?
>An API is a sеt of rules allowing diffеrеnt softwarе applications to communicate and interact with еach othеr.<br>
>API works as a bridgе bеtwееn diffеrеnt systеms to talk to еach othеr, much likе how pеoplе from diffеrеnt culturеs might communicate through a common languagе intеrprеtеr. This communication can involve sеnding and rеcеiving data, making rеquеsts for specific actions, or rеtriеving information from another systеm.

### 2. Types of APIs:
> APIs are broken down into four main types: Open API, Partner API, Private API, and Composite API.  

> public APIs, these are your completely public access APIs, with no restrictions on who can use them.

> Partner API is not open to the public, and access is restricted through the use of specific licenses. Used between a business and its client as part of a paid online service.

> Private API also called internal APIs or enterprise APIs, private APIs are types of APIs that are used only within a single company. 

> Composite APIs are a combination of data and service are types of APIs that are used to speed up the execution of certain tasks and improve performance.


### 3. API Architecture Types:
1. RESTful API Protocols
> REST is short for “representational state transfer” and refers to an architectural style of API. The REST architecture has a set of characteristics that includes:   Client-Server Separation: This defines the roles of the client and server in an API exchange.<br>
In essence, the client makes a request, and the server responds. Servers can't make requests, and clients can't issue responses.   HTTP Interface: All requests and responses must use the HTTP protocol, 


2. SOAP (Simple Object Access Protocol)
> SOAP (short for Simple Object Access Protocol) APIs are among the original web services, dating back to Web 1.0 days.

3. XML-RPC
>XML stands for “Extensible Markup Language,” and RPC stands for “Remote Procedure Call.” XML-RPC uses XML to encode API calls and HTTP to transport them.

4. JSON-RPC
> This is a similar protocol to XML-RPC except for the use of JSON instead of XML. JSON is short for “JavaScript Object Notation” and is similar in that it’s relatively simple to read by humans.

5. Thrift
> Initially designed by Facebook, the Thrift protocol was eventually made open source and is now part of Apache’s software lineup. It can work with JSON or binary notation, among other languages. 


### 4. differences: Web API vs. REST API
1. Web API
> Web APIs encompass any API using HTTP or HTTPS. All REST APIs are Web APIs, but not all Web APIs are RESTful. Technically, they can be stateless or stateful.<br>
Non-RESTful Web APIs are used for stateful operations, 

2. REST API
> REST APIs are Web APIs that follow specific architectural principles like statelessness and client-server architecture. <br>
Statelessness implies that between sessions of API invocation, the server that hosts the program doesn’t need to ‘remember’ or hold any information between sessions to perform the appropriate action.<br>
** REST services are scalable due to the statelessness

### 5. GraphQL Vs. REST APIs:
> The core difference between GraphQL and REST APIs is that GraphQL is a specification, a query language, while REST is an architectural concept for network-based software.

> When using REST, you’d likely get a response of complete "datasets". To request information from x objects, you’d need to perform x REST API requests.

> GraphQL uses its query language to tailor the request to exactly what you need, from multiple objects to specific fields within each entity. GraphQL would take x endpoint, which can do a lot with that information, but you have to tell it what you want first.

### 6. What are the most common HTTP methods used in RESTful APIs?
> In RESTful APIs, there are various HTTP methods to interact with different systems and perform the CRUD (create, read, update, delete ) operation.

1. GET: The GET method is used to retrieve the data or resources from the server in different formats like JSON or XML. It returns the 200 (OK) response code when you receive the resources successfully, and in case of errors, it returns 400 or 400.

2. POST: The POST method is used to create resources in the server. A client is required to pass the resource data as a payload of the request, and the server handles it.

3. PUT: The PUT HTTP method is used to update the existing resources. It creates a new resource in the server if it doesn’t exist. Otherwise, it replaces the old resource with the new resource.

4. PATCH: The PATCH method also updates the data in the server, but rather than replacing the whole resource, it partially updates the existing resource.
    DELETE: The DELETE method is used to remove the resource from the server.


### 7. What are some real-world examples of RESTful APIs?

1. Payment Gateways: Payment Gateways like Paypal Razorpay offer APIs so developers can integrate these payment gateways in any application and handle the transactions.

2. Weather Data: Weather services like OpenWeatherMap provide RESTful APIs that deliver weather forecasts, current conditions, and historical weather data for specific locations.

3. Travel and Booking: Different travel and booking companies offer RESTful API to book tickets.<br>
Project: Rest api for a ticket booking system using spring boot and mysql.

### 8. How is data typically formatted in a RESTful API response?
> RESTful API response, data is formatted in structured text such as JSON (Javascript Object Notation) format. However, some API also uses plain text, HTML, XML, etc. formats. 


### 9. What is Cross-Origin Resource Sharing (CORS), and why is it important for web APIs?
> CORS is a security feature implemented in the web browser to allow or restrict the web applications running at one origin to interact with resources hosted on another origin. Here, origin refers to the domain.<br>
However, you can pass the authorization headers to API requests to access the resources from the server. CORS can control API accessibility.

### 10. 4. What are cache-control headers?
> Cache-control headers are used to control catching and to attain caching ability. The most commonly used cache-control headers are public, private, and No-Store.<br>

1. The public response directive indicates that a resource can be cached by any cache.<br>

2. The private response directive indicates that a resource is user specific—it can still be cached, but only on a client device.<br>

3. The no-cache directive means that a browser may cache a response, but must first submit a validation request to an origin server.<br>

4. The no-store directive means browsers aren’t allowed to cache a response and must pull it from the server each time it’s requested. This setting is usually used for sensitive data, such as personal banking details.<br>

>Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it’s cached and its maximum age before expiring.

### 11. What is the definition of messaging in terms of RESTful web services?
> In REST API web services, when a REST client wants to send a message to the server, it can be sent in an HTTP request form, and the same applies to the server. This kind of communication is called messaging in REST.

### 12. What are payloads in RESTful web services?
> Payloads are the request data passed through the POST or GET method and found in the message’s body of an HTTP request in RESTful web services.<br>
There is no such maximum limit for payload size that can be sent in POST methods. However, payloads with larger sizes can consume larger bandwidth. Thus the server could take more time to proceed with the request.

### 13. The main parts of an HTTP response
> The main parts of the HTTP response are the HTTP version, Status line, HTTP Response Header, and HTTP Response body. 

### 14. What is a URI?
> URI stands for ‘Uniform Resource Identifier.

### 15.  Disadvantages of RESTful web services?
> RESTful web services are stateless and do not maintain session simulation responsibility as the client side does not provide a particular session id for it. 

### 16. Advantages of REST 
> HTTP makes the implementation of REST easy. 
REST fits in the existing infrastructure of the web, thus the web application can easily implement the REST. XML and JSON web technologies make REST easy to learn. 

### 17. How is JAXB related to RESTful web API?
> JAXB is a Java arch used for XML binding in RESTful web API.

### 18. What is AJAX?
> AJAX stands for  Asynchronous javascript and XML.

### 19. What is a resource in a RESTful context?
> A REST resource is any object or group of objects that can be accessed through a dedicated API endpoint. 

### 20. What are HTTP headers, and which ones are most commonly used?
> HTTP headers contain the metadata that is included in an API request or response. These key-value pairs provide essential details that help the API client and server communicate more effectively

> One of the most common request headers are 'Accept'.
1. Accept:
> Accept request-header field can be used to specify certain media types which are acceptable for the response.