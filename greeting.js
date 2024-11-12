// Import the http module from Node.js
const http = require('http');

// Define the port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response type to 'text/plain' for plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the plain text response
    res.end(greeting());
});

// Define the greeting function
function greeting() {
    return "Hello, my name is Alexandra"; // Return the message
}

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
