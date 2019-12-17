var http = require('http');
var fs= require('fs');

var port_num = 8124

http.createServer( function(req, res){
	var name  = require('url').parse(req.url, true).query.name;

	if(name === undefined) name = 'world';

	if(name == 'burningbird') {
		var file = '/data/phoenix5a.jpg';
		fs.stat(file, function(err, stat){
			if(err) {
				console.error(err);
				res.writeHead(200, {'content-Type':'text/plain'});
				res.end('Sorry, your burningbird is gone\n');
			} else {
				var  img = fs.readFileSync(file);
				res.contentType = 'image/jpeg';
				res.contentLength = stat.size;
				res.end(img, 'binary');
			}	
		
		});

	}
	else{
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('Hello ' + name + "\n");
	}
}).listen(port_num);


console.log("Run server at 0.0.0.0/"+port_num);

