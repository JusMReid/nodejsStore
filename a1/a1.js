const http = require('http');

const routes = require('./a1routes');

const server = http.createServer(routes.handler);

server.listen(3000);