
const http = require("http")
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const fs = require("fs");

var PORT = process.env.PORT || 8080;

app.use(express.static('client'));
app.use(express.static('serverSide'));

const server = http.Server(app).listen(PORT);
const io = socketIo(server, {wsEngine: 'ws'});

app.get('/client' || '/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/server', function(req, res){
  res.sendFile(__dirname + '/serverSide/start.html')
});


io.sockets.on('connection', function(socket){
  console.log('Connection established: ' + socket.id);

  socket.on('coord', function(data){
    socket.broadcast.emit('coord', data);
  });

  socket.on('coord3', function(data){
    socket.broadcast.emit('coord3', data);
  });


  // socket.on('pulse', function(data){
  //   console.log('Pulse number: ' + data.count);
  // });
});

// const express = require('express');
// app = express();
// var server = app.listen(3000);
//
// app.use(express.static('client'));
//
// console.log('running');
