"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
var http = require('http').Server(app);
var io = socket_io_1.default(http);
app.use(express_1.default.static('../web/chat-app/public'));
io.on('connection', function (socket) {
});
var server = http.listen(12345, function () {
    console.log('listening on *:12345');
});
