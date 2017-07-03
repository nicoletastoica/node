var express = require('express');
app = express();

app.get('/', function(req, res){
	res.send('lulu');
	console.log('my index page');
});
app.get('/document',function(req,res){
	res.send('my document');
	
});
app.get('/contact',function(req,res){
	res.send('my contact');
	
});

app.listen(3000, function(){
	console.log('server started');
});