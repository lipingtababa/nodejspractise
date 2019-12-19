var fs = require('fs');
var async = require('async');
var dir = './data/'

async.waterfall(
[
    function readDir(callback){
        fs.readdir(dir, function(err, files){
            callback(err, files);
        });
    },

    //TODO it will not workl if there are multiple files under the directory
    function loopFiles(files, callback){
        files.forEach(function(name){
            callback(null, name);
        });
    },

    function checkFile(filename, callback){
        fs.stat(dir + filename, function(err, stats){
            callback(err, stats, filename);
        });
    },

    function readData(stats, filename, callback){
        if(stats.isFile()){
            fs.readFile(dir+ filename, 'utf8', function(err, data){
	        callback(err, filename, data);
	    });
        }
    },
    
    function modify(filename, text, callback){
        var adjdata = text.replace(/apple/g, 'orange');
        callback(null, filename, adjdata);
    },
    
    //In fact, you can pass parameters by wrap the system call in abother function
    function writeBack(filename, text, callback){
        fs.writeFile(dir+filename+'.new', text, function (err){
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
