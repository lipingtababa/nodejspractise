"user strict"

var util = require("util");
var eventEmitter = require("events").EventEmitter;
var fs = require("fs")

function InputChecker(name, file){
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', 
    {
        'flags':'a',
        'encoding':'utf8',
        'mode':0o666
    });
}

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input){
    //Trim extraneous white space
    let command = input.trim().substr(0,3);
    //process commmand
    //if wr, write input to file
    if(command == 'wr:'){
	//NOTE emit accept parameters and will forward them to event handler
        this.emit('write', input.substr(3, input.length));
    }
    else if (command == 'en:'){
        this.emit('end');
    }
    else{
        this.emit('echo', input);
    }
};

let ic = new InputChecker('Confusing', 'nonsense');

ic.on('echo', function(data){
    process.stdout.write(ic.name + ' wrote ' + data + "\n");
});

ic.on('write', function(data){
    this.writeStream.write(data, 'utf8');
});

ic.on('end', function(){
    process.exit();
});


process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
    let input = process.stdin.read();
    if(input !== null){
        ic.check(input);
    }
});

process.stdout.write("Running\n", "utf8");

//TODO my code would exit after capturing just one event
