import express, { Request, Response } from 'express';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';
import UserRequest from './requests/user-requests';
import JWTHandler from './utils/jwt-handler';
import cors from 'cors';

const app = express();
const http = require('http').Server(app);
const io = socketIO(http);

app.use(express.static('../web/chat-app/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//http routes
app.post('/user/login', UserRequest.login);
app.post('/user/register', UserRequest.register);

//socket routes
io.on('connection', function(socket: socketIO.Socket) {
  
});

const server = http.listen(12345, function() {
  console.log('listening on *:12345');
});