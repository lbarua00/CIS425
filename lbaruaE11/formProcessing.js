// Linn Htet Kyaw, E11, CIS 425, 1:20 pm

// Importing the http module using the require keyword
// and assigning it to a global variable named "http"
let http = require("http");

// Creating the Node.js server
// 4.1: Invoking the createServer method using the http object
// Will use the method name processRequest and storing the reference
// in a new global variable named httpServer
let httpServer = http.createServer( processRequest );

// Starting the server by invoking the listen method
// Configuring the server to listen on port 8080
httpServer.listen( PORT );
console.log(`listening on port ${PORT}`);

// Implementing the method to process HTTP requests
function processRequest( request, response ){

    // Logging the Request URL to the console
    console.log(`http request received`);
    console.log(request.url);

    // Declaring a varibale to store the host
    let base = "http://" + request.headers["host"];

    // Creating a response header by invoking the writeHead method
    response.writeHead( ok, {'Content-type':'text/html'} );

    // Adding a head tag
    response.write("<head><link rel='icon' href='data:;base64,iVBORw0KGgo='></head>")

    // Declaring a variable to store the URL.
    // Supplying the Request URL and host as arguments,
    // and storing the reference to the URL object in the url variable
    let url = new URL(request.url, base);

    // Logging the URL information to the console and using the 
    // href attribute of the url object to get the full URL
    console.log(`full URL is ${url.href}`);

    // Logging the URL's search string to the console and using the
    // search attribute to the url object
    let searchString = url.search;
    console.log(`search string is ${searchString}`);

    // Storing the search parameters in new variables
    // Declaring a new variable to store the name and accessing the
    // searchParms attribute of the url object.
    // In addition, will use "get" method to retrieve the name, while
    // providing name of the attribute as an argument.
    let name = url.searchParams.get("Name");

    // Declaring a new variable to store the id and using the get 
    // method as in the previous step to retrieve the id
    let id = url.searchParams.get("ID");

    // Using an if structure to test if the name is empty or not
    if (name==''){
        
    }else{
    // 5.8.1
    response.write("<p>Here is the information you sent to the server.</p>");
    response.write(`<p>Name: ${name}</p>`);
    
    }        



}
