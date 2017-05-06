//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require ('path');
var mongoose = require('mongoose');


//connect to mongoDB
mongoose.connect ('mongodb://localhost:27017/listingsDb');

//define albumSchema
  var listingSchema = mongoose.Schema({
      _id : Number, //*******************??????NOT SURE OF ID FORMAT or If i need to put it in
      cost : Number,
      sqft: Number,
      city : String,
      __v : Number  //************************not sure
    });//end Schema



//create global album model
var listings = mongoose.model( 'listings', listingSchema);


//uses
app.use(express.static('public'));
app.use( bodyParser.urlencoded ({extended: true}));

//global
var port = process.env.PORT || 3000;

//spin up server
app.listen(port, function(){
   console.log('server is up on:', port);
});
