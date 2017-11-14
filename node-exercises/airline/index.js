var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
	res.send('Hello Airline');
});
 
app.listen(3000);