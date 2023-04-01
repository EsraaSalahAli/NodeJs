var express = require('express')
var app = new express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connect', function (client) {
    console.log("Socket io connected")
    console.log(client)

    client.on('message',function(data){
        console.log('data', data)
        io.emit('all',data)
    });
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat.html')
});


http.listen(3000);
