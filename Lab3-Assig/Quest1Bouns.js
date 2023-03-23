var http = require("http")
var path = require("path")
var fs = require("fs")


http.createServer(function (request, response) {
    if (request.url == "/" && request.method == "GET") {
        response.writeHead(200, { 'content-type': "text/html" });
        var html = fs.readFileSync("Home.html");
        response.write(html);
        response.end();
        return;
    }
    else if (request.url == "/style.css" && request.method == "GET") {
        response.writeHead(200, { 'content-type': "text/css" });
        var css = fs.readFileSync("style.css");
        response.write(css);
        response.end();
        return;
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        var html = fs.readFileSync("404.html");
        response.write(html);
        response.end();
    }
}).listen(3000);