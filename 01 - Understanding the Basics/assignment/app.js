const http = require('http');

const requestHandler = require('./routes');
// creating server
const server = http.createServer(requestHandler);

// listening the server at port 3000
server.listen(3000, 'localhost');