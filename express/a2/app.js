const express = require('express');

const app = express();

app.use('/users',(req,res,next)=>{
    console.log('middleware 2...');
    res.send('<h4>USERS!</h4>');
});

app.use('/',(req,res,next) => {
    console.log('middleware 1...');
    res.send('<h2>The / PAGE</h2>');
});



app.listen(3000);