//setting a server

var express = require('express');//seeting server
var mongoose = require('mongoose'); //initializing mongoose>>connect with mongodb below
var bodyParser = require('body-parser');//initilizing bodyParser that looks for JSON in the POST request
var app = express();//invoking server

//This will serve up any files/folder in the public folder and our node_modules folder into our server.
app.use(express.static('public'));
app.use(express.static('node_modules'));

mongoose.connect('mongodb://localhost/beers');//connecting mongoose to mongodb under "/beers" db
var Beer = require("./BeerModel"); //receiving the export of the model named Beer


//this is to get the server to bring index.html when we are in this route /
app.get('/', function(req, res){
  res.sendFile(__dirname + "/Public/index.html"); //?
})

/*app.get('/', function (req, res) {
  res.send("You are inside the fullstack project")
});*/

app.get('/beers', function (req, res) {
 Beer.find(function (error, beers) {
    res.send(beers);
  });
});
//post request to get data from user
/*app.post('/beers', function (req, res) {
  res.send('POST!');
});*/
app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.post('/beers', function (req, res, next) {
  var beer = new Beer(req.body);

  beer.save(function(err, beer) {
    if (err) {return next(err); }

    res.json(beer);
  });
});
app.listen(4000);//creating local storage and make him listen