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
	let x = req.params.id;

	for ( i = 0; i < candies.length; i++) {
	if (x == candies[i].id) {
		console.log('IN FOR LOOP!');
		res.send(candies[i]);
	} else {res.send('Error');}
}


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
	let x = req.params.id;
	console.log('x: ' + x);
	console.log('req.body.id' + req.body.id);
	console.log('req.body.name' + req.body.name);
	console.log('req.body.color' + req.body.color);

	let newCandy = {
		id: req.body.id,
		name: req.body.name,
		color: req.body.color
	};

	for ( i = 0; i < candies.length; i++) {
		if (x == candies[i].id) {
			console.log('IN FOR LOOP!');
			candies[i] = newCandy;
		} else {}
	}
	res.send(newCandy);
});

router.delete('/:id', function(req, res) {
	let x = req.params.id;

	for ( i = 0; i < candies.length; i++) {
		if (x == candies[i].id) {
			console.log('In delete for loop!');
			candies.splice(i, 1);
			console.log('candies: ' + JSON.stringify((candies)));
			return res.send('"message": "deleted"');
		} else { let error = 'not found';}
	} 
	if(error) {res.send(error);}
});

module.exports = router;
