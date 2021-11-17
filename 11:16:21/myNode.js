// let number = 5;
// console.log(`number is ${number}`);

// this is the node.js javascript file

// This port number is for the SERVER
// Client port number is automatic/random
const PORT = 8080;

console.log(`Program started....`);


// import the http module/library.
// "http" is the object that contains a reference to the http module
// Require command: 
let http = require("http");


// create a http server
// that will listen to incoming http requests
// Create a server
// CreateServer requires a reference to a method which will process http requests and send response
// processServerRequest is a "callback function"
// that will run when an incoming request is received
let httpServer = http.createServer( processServerRequest );


// ask the server to listen for incoming http connections
// create a socket (ip + port)
httpServer.listen( PORT );
console.log(`listening on port ${PORT}`);

function processServerRequest( request, response ){
    // this method will process http requests and send responses 
    // it will be invoked when the server gets a request
    // two parameters: request from client, response from server

    console.log(`http received request.`);
    console.log(request.url);
    // console.log("processing data...");

    // Create a response to send back to the client
    response.writeHead(200, {'Content-type': 'text/html' }   );

    // hardcoding the head to ensure that a request for a favicon is not duplicated. Send blank favicon.
    response.write("<head>  <link rel='icon' href='data:;base64,iVBORw0KGgo='></head>");
    response.write("<p>HTTP request received. This is my response.</p>");

    // get the base for the URL
    let base = "http://" + request.headers["host"];

    // let's construct the URL object
    let url = new URL(request.url, base);

    // href: hyperlink ref
    console.log(`full URL is ${url.href}`);

    // get the search string (the part after the ? in the URL)
    let searchString = url.search;
    console.log(`search string is ${searchString}`);

    // extract specific fields from the search string
    // the value inside the method is the "name" from the form fields
    let name = url.searchParams.get("Name");

    // this is the html being sent back to the client which is your browser
    response.write(`<p>You entered ${name} </p>`);


    // terminates the http response
    response.end();


}