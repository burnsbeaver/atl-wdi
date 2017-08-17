//your code here
const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser')

var port = process.env.PORT || 3002;

app.set('view engine', 'hbs');
// app.use(bodyParser.urlencoded({
//   extended: true
// }));



//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use("/pirates", pirateController);

app.get('/', (req, res)=>{
  res.send('TEST')
})

app.listen(port, function() {
  console.log('server is running on port ' + port);
});
