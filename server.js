var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app);



app.post('/api/matches', function(req, res){
	
	var newBuddy = req.body;
	res.json(newBuddy);
})

app.listen(PORT, function(){
	console.log('App listening on port ' + PORT);
})