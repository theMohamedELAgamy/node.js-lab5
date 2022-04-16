
let fs =require('fs')
var express = require('express')
// next session
var app = new express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connect', function(client){
    console.log(client.id)
    client.on('message',function(message,name){
        client.broadcast.emit('messages',message,name)
    })


    
})



app.get('/',function(req,res){
   
    res.sendFile(`C:/xampp/htdocs/node.js/lab5/task2/server/index.html`)
})
http.listen(3000)