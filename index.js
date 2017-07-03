var express = require('express');
app = express();

app.get('/', function(req, res){
	res.send('lulu');
	console.log('my index page');
});

app.listen(3000, function(){
	console.log('server started');
});