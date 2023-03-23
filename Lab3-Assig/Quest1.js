var http = require("http")
var fs = require('fs')


http.createServer(function (request, response) {
    if (request.url == "/") {
        response.writeHead(200, { 'content-type': "text/html" });
        var html = fs.readFileSync("Home.html");
        response.write(html);
        response.end();
        return;
    }
    else if (request.url == "/Login") {
        response.writeHead(200, { 'content-type': "text/html" });
        var html = fs.readFileSync("Login.html");
        response.write(html);
        response.end();
        return;
    }
    else if (request.url == "/Signup") {
        response.writeHead(200, { 'content-type': "text/html" });
        var html = fs.readFileSync("Signup.html");
        response.write(html);
        response.end();
        return;
    }
    else if (request.url == "/Profile") {
        response.writeHead(200, { 'content-type': "text/html" });
        var html = fs.readFileSync("Profile.html");
        response.write(html);
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