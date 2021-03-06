var http = require("http")
var server = http.createServer()
server.on("request", function(req, res){
    console.log("request event");
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World\n");

    res.on("close", function(){
        console.log("Connection closed");
    });

    req.on("close", function(){
        console.log("Connection closed in req callback");
    });
});

server.on("connection", function(){
    console.log("somebody connected");
})

server.listen(8124, function(){
    console.log("listening event");
});

console.log("Server starts running");
