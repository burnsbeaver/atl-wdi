// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3003;

app.get('/', (req, res)=> {
  res.send('welcome to pizza express!')
});

app.get('/topping/:type', (req, res, next)=> {
  res.send(`${req.params.type} pizza is a good choice!`)
});

app.get('/order/:amount/:size', (req, res, next)=> {
  res.send(`your order for ${req.params.amount} ${req.params.size} pizza(s) will be ready in 30 minutes`)
})

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
