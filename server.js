//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require ('path');
var mongoose = require('mongoose');


//connect to mongoDB
mongoose.connect ('mongodb://localhost:27017/realestate');


  var listingSchema = mongoose.Schema({
      cost : Number,
      rent : Number,
      sqft: Number,
      city : String
  });//end Schema



//create global
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



//get data from realestate db

app.get('/listings', function(req,res){
  listings.find().then(function(data){
    console.log('data please',data);
    res.send(data);
  });
});
