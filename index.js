var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = process.env.PORT || 5000;

var userList = [];

app.get('/', function(req, res){
  res.send('<h1>AppCoda - SocketChat Server</h1>');
});


http.listen(PORT, function(){
  console.log('Listening on *: ', PORT);
});


io.on('connection', function(clientSocket){
  console.log('a user connected');

  clientSocket.on('disconnect', function(){
    console.log('user disconnected');

  });

  clientSocket.on('connectUser', function(nickname) {
    userList.push(nickname);
    clientSocket.username = nickname;
    console.log('user: ' + clientSocket.username + 'has entered!');
  });

  clientSocket.on('createChatroom', function(){

  });
});