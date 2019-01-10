const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');
        res.write('<Button type="submit">CREATE</Button>');
        res.write('</form>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body =[];
        req.on('data',(chunk)=>{
           console.log(chunk);
           body.push(chunk); 
        });
        return req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const userInput = parseBody.split('=')[1];
            console.log(userInput);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
        
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<body>')
        res.write('<ul>');
        res.write('<li>Jay</li>');
        res.write('<li>Justin</li>');
        res.write('<li>Jay Reid</li>');
        res.write('</ul>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
};

module.exports = {
    handler: requestHandler
};