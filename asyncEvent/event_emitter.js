var eventEmitter = require("events").EventEmitter;

var counter = 0;

var em = new eventEmitter();

//register a event handler
em.on('timed', function(data){
	console.log('An event is captured ' + data);
}
);

//Generate events with an interval
setInterval(function(){
	console.log("An event is emitted " + counter);	
	em.emit('timed', counter++);
}, 1000)

