var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
})

// start listening to requests on port 8000
app.listen(8100);

// export our app for testing and flexibility, required by index.js
module.exports = app;
