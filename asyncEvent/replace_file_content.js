var fs = require('fs');
 
var counter = 0;
var files_counter = 0;

fs. readdir("./data/", function(err, files){
	if(err)
	{
		console.error(err.message);
	}else{
		files_counter = files.length
		files.forEach(function(name){
			fs.stat('./data/'+name, function(err, stats){
			if(err){
				return err;
			}
			if(!stats.isFile()){
				counter++;
				return;
			}

			//TODO here you are unable to pass the file name to the callback function, which is a big issue
			fs.readFile('./data/'+name,'utf8', function (err, data) {
					if(err){
						console.error(err.messge);
					}
					else{
						var adjData = data.replace(/apple/g, 'orange');
						fs.writeFile('./data/'+name, adjData, writeBackHandler);
					}
				}
				);
				})		
		});
	}
});




function writeBackHandler(err){
	if(err){
		console.error(err.message);
	}
	else{
		counter ++;
		if(counter == files_counter){
			console.log("All Done")
		}
	}

}
