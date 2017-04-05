var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {

	// What would go here? 
	// Hint: we want all candies in JSON format
	// req.JSON()
	// res.send(JSON.stringify(candies) );
	res.send(candies);
});

router.get('/:id', function(req, res) {
	console.log(req.params.id);
	res.send(candies[req.params.id-1]);
});

router.post('/',  function(req, res) {



	console.log('req.body.id' + req.body.id);
	console.log('req.body.name' + req.body.name);
	console.log('req.body.color' + req.body.color);

	let newCandy = {
		id: req.body.id,
		name: req.body.name,
		color: req.body.color
	};

	candies.push(newCandy);

	res.send(newCandy);

});

router.put('/:id', function(req, res) {
	console.log('req.body.id' + req.body.id);
	console.log('req.body.name' + req.body.name);
	console.log('req.body.color' + req.body.color);

	let newCandy = {
		id: req.body.id,
		name: req.body.name,
		color: req.body.color
	};
});

router.delete('/', function(req, res) {

	console.log((JSON.stringify(res)));
	// candies.push
});

// Fill out the rest of the routes here

module.exports = router;