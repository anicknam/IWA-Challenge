var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
})

// start listening to requests on port 8100
var port = 8100;

app.listen(port);
console.log(`🌎  ===> server listening on port ${port}`);