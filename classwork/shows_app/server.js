//pull in express to use in our file
const express = require('express');
const hbs = require('hbs');
//use express to run (constructor function) call it app because its application holding express function
const app = express();

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));

app.get('/shows', (req, res)=>{
  var faveShows = ["Friends", "Seinfeld", "Frazer", "How I Met Your Mother"];
  res.render('shows', {
    data: faveShows
  });
});



const port = process.env.PORT || 3002;
//start listening on port(this will start the server)
app.listen(port, () => {
  console.log("Running on port: " + port)
});
