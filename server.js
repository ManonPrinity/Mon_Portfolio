var express = require("express");
var app = express();
var server = app.listen(8080);
var fs = require("fs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res)
{
	fs.readFile("./index.html", "utf-8", function(error, content)
	{
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(content);
	});
});

app.use(function(req, res, next)
{
	fs.readFile("./notfound.html", "utf-8", function(error, content)
	{
		res.writeHead(404, {"Content-Type": "text/html"});
		res.end(content);
	});
});
