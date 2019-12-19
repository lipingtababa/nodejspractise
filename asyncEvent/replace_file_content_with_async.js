var fs = require('fs');
var async = require('async');
 
async.waterfall(
[
	function readData(callback){
		fs.readFile('./data/data1.txt', 'utf8', function(err, data){
			callback(err, data);
		});
	},
	//The code works but I don't know how function modify(text, callback) match the function callback(err, data).
	function modify(text, callback){
		var adjdata = text.replace(/apple/g, 'orange');
		callback(null, adjdata);
	},
	//TODO as we can see, you can't pass the filename between the functions
	//And it is hardcoded
	function writeBack(text, callback){
		fs.writeFile('./data/data1.txt', text, function (err){
			callback(err, text);
		})
	}
], 

function(err, result){
	if (err) {
		console.error(err.message);
	}
	else {
		console.error(result);
	}
}

);
