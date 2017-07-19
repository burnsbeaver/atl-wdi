//pull in express to use in our file
const express = require('express');
const hbs = require('hbs');
//use express to run (constructor function) call it app because its application holding express function
const app = express();

app.set("view engine", "hbs");

app.get('/greeting', (req, res) => {
  //the "render" below is going to go into the Views folder
  //because that is what we set to HBS using app.set, and render
  //that file
    res.render('greeting', {
      //What datas do we want to use in our HBS file?
      data: req.query.data,
    });
});
app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        data: favoriteFoods
    });
});
//
// app.get('/greeting', (req, res) => {
// res.send("hey cool, rad, awesome, coders of WDI11!!");
// });
//
// app.get('/rihanna', (req, res) => {
// res.send('work work work work work');
// });
//
// app.get("/name/:name",(req, res) => {
//     if(req.query.human) {
//         res.send(`Hello, ${req.params.name}!`);
//     }else{
//         res.send(`hello, toaster oven`);
// }
// });
//
// app.get('/users/:user_id/friends/:friend_id',(req, res) => {
// res.send(`hello, user #:${req.params.user_id}. Your friend is User#:${req.params.friend_id}.`)
// });
//
// app.get('/delicious/:food', (req, res) => {
//     console.log(req.query);
// res.send(`Man I love ${req.params.food}`);
// });
//
// app.get('/sightings', (req,res) => {
//     console.log(req.query);
// res.send(`how many ufo sighting do you think are in the state: ${req.query.state}? sights: ${req.query.sights}.`);
// });
//
// app.get('/add', (req, res) => {
//     console.log(req.query);
//  let num1 = req.query.num1;
//  let num2 = req.query.num2;
//  let sum = parseInt(num1) + parseInt(num2);
// res.send(`the total is ${sum}`);
// });
//
// app.get('/subtract', (req, res) => {
//     console.log(req.query);
//  let num1 = req.query.num1;
//  let num2 = req.query.num2;
//  let sum = parseInt(num1) - parseInt(num2);
// res.send(`the total is ${sum}`)
// });
//
//
// app.get('/multiply', (req, res) => {
//     console.log(req.query);
//  let num1 = req.query.num1;
//  let num2 = req.query.num2;
//  let sum = (parseInt(num1)) * (parseInt(num2));
// res.send(`${sum}`)
// });
//
// app.get('/math/:operator', (req, res) => {
//     console.log(req.query);
// if (req.params.operator === "add") {
//     let sum = parseInt(req.query.num1) + parseInt(req.query.num2);
//     res.send(`${sum}`);
// } else if (req.params.operator === "subtract") {
//     let sum = parseInt(req.query.num1) - parseInt(req.query.num2);
//     res.send(`${sum}`);
// } else if (req.params.operator === "multiply") {
//     let sum = parseInt(req.query.num1) * parseInt(req.query.num2);
//     res.send(`${sum}`);
// }
// });


//if environment is set for port then use it, if not use 3000(default port)
const port = process.env.PORT || 3000;
//start listening on port(this will start the server)
app.listen(port, () => {
  console.log("Running on port: " + port)
});
