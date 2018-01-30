"use strict";

//Port defintion // Can change if one port dosen't work for some reason // 3000 - 5000 is ok
const PORT = 3000;

//Import the http library
const http = require('http');

//Import the fs library // file stuff
const fs = require('fs');

function handleRequest(req, res){
	console.log(req.url);
	
	switch(req.url){
		case '/':
		case '/openhouse.html':
		res.end(fs.readFileSync('openhouse.html')); // res.end sends to stuff to webpage
		break;
		
		case '/openhouse.css':
		res.end(fs.readFileSync('openhouse.css'));
		break;
		
		case '/openhouse.js':		
		res.end(fs.readFileSync('openhouse.js'));
		break;
		
		default:
		res.statusCode = 404;
		res.end("File not found");
	}
	
}

//Create the web server
var server = http.createServer(handleRequest);


//Start listening on port 80
server.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});