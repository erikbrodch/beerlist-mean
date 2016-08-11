var mongoose = require('mongoose');//initializing mongoose>>connect with mongodb
var Schema = mongoose.Schema;//initializing  the schema to create a schema
//creatig a beer schema
var beerSchema = new Schema ({
  name: { type: String },
  style: { type: String },
  image_url: { type: String },
  abv: { type: Number }
});
//creating a model based on the schema (name of model, schema it's based upon, name of collection)
var Beer = mongoose.model("Beer", beerSchema, "AllBeers");

/*var goldstar = new Beer({name: "Goldstar"});

goldstar.save();*/
//exporting Beer model to app.js
module.exports = Beer;