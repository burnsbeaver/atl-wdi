// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');
// assigning 3000 as our port
var port    = 3003;

const indexController = require('./controllers/index_controller');
app.use('/', indexController);

const toppingsController = require('./controllers/toppings_controller');
app.use('/toppings', toppingsController);

const orderController = require('./controllers/order_controller')
app.use('/order', orderController);




// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
