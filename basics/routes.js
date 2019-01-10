const fs = require('fs');

//function requestHandler(req, res){};
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><Input type="text" name="message"><Button type="submit">SEND</Button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err)=>{
                //fs.writeFileSync('message.txt', 'DUMMY');
                //res.writeHead(302,{});
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });  
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello from my node.js Server</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;
// module.exports.handler = requestHandler;
// module.exports.someText = "This is some text";
//exports.handler = requestHandler;
module.exports = {
    handler:requestHandler,
    someText: "This is some dummy text"
};