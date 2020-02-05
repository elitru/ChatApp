import express from 'express';
import socketIO from 'socket.io';
import path from 'path';

const app = express();
const http = require('http').Server(app);
const io = socketIO(http);

app.use(express.static('../web/chat-app/public'));

io.on('connection', function(socket: socketIO.Socket) {
  
});

const server = http.listen(12345, function() {
  console.log('listening on *:12345');
});