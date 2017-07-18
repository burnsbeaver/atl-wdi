const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.route);
  console.log(req.query);
  console.log(req.params);
  res.send('hellow world!!!!!!!!!');
});
app.get('/math/:operator', (req,res) => {
  var x = parseInt(req.query.num1)
  var y = parseInt(req.query.num2)
  var calculation = x (req.params.operator) y;
  res.send(`Question: What is ${req.query.num1} ${req.params.operator} ${req.query.num2}. Answer: ` calculation)
});


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('hello-express is running on port' + port);
});
