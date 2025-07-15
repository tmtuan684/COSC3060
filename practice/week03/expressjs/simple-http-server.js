/**
 * @file simple-http-server.js
 * @description HTTP Server using Node.js
 * @requires http module
 * 
 */
const http = require('http');
// The hostname and port where our server will reside
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server 
const server = http.createServer((req, res) => {
   res.end('Hello RMIT from an HTTP server!');
});

// The server listens to port 3000
server.listen(port, hostname, () => {
  console.log(`Server running on ${port}/`);
});