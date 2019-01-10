const http = require('http');

const routes = require('./routes');
//const fs = require('fs');

/*function reqListener(req, res){
    You would then pass reqListener into createServer
}
  http.createServer(reqListener);
*/

/*
http.createServer(function(req,res){

});
*/
console.log(routes.someText);


const server = http.createServer(routes.handler);

server.listen(3000);
//console.log('listening on port 3000...);