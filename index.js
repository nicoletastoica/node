var express = require('express');
	mongoose = require ('mongoose');
app = express();
var port = process.env.PORT ||3000;
var db =mongoose.connect('mongodb://46.101.51.65:21981/salomondrin/users');
var Book = require ('./models/bookModel');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://46.101.51.65:21981/salomondrin';

app.get('/', function(req, res){
	res.send('welcome to my API');

});

app.listen(port, function(){
	console.log('gulp is running my server on port:' +port);
});


app.get('/users', function(req, res){
    res.send('mongo client');
    MongoClient.connect(url, function(err, db) {

        if(err) throw err;

        console.log("Connected correctly to server.");
        db.collection("users").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result.username);
            db.close();
        });
    });
});
