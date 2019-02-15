// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send back a response and end the connection
    res.end('Hello World!\n<button type="button">Click Me!</button>');
});

const PORT = process.env.PORT || 3000;
// Start the server on port 3000
 app.listen(port, () => {
    console.log(`Our app is running on port ${ PORT }`);
