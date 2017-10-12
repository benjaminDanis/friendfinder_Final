var express = require('express');
var path = require('path');
var matches = require(path.join(__dirname, './../data/friends.js'));

var app = express();



module.exports = function(app){

	app.get('/api/friends', function(req, res){
		 res.json(matches);
	});

	app.post('/api/friends', function(req, res){

		var newBuddy = {
			name: req.body.name,
			picture: req.body.picture,
			scores: req.body.score
		}

		matches.push(newBuddy);

		var newArr = [];
		var newMatch;
		var previousScore = 1000;

		for (var i = 0; i < matches.length - 1; i++) {
			
			var totalDifference = 0;
			console.log('Potential Match: ' + matches[i].name)

			for (var j = 0; j < matches[i].scores.length; j++) {
				
				var eachDifference = Math.abs(parseInt(matches[matches.length - 1].scores[j]) - parseInt(matches[i].scores[j]));

				
				totalDifference += eachDifference;
				console.log(parseInt(matches[6].scores[j]) + '-' + parseInt(matches[i].scores[j]) + '=' + totalDifference);
				


			}
				console.log('Total Difference: ' + totalDifference);
				newArr.push(totalDifference);

				if (totalDifference <= previousScore ) {

					newMatch = matches[i];
					previousScore = totalDifference;
					console.log('New Match: ' + newMatch.name);



				}

				console.log(newMatch.name);


		}

		


		res.json(newMatch);
	})
}












