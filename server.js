// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send back a response and end the connection
    res.end('Hello World!\n<button type="button">Click Me!</button>');
});

let port = process.env.PORT || 8080;
// Start the server on port 3000
 app.listen(port, 'localhost');
console.log("Node server running on port  " + port);
