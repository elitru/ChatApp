"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var body_parser_1 = __importDefault(require("body-parser"));
var user_requests_1 = __importDefault(require("./requests/user-requests"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var http = require('http').Server(app);
var io = socket_io_1.default(http);
app.use(express_1.default.static('../web/chat-app/public'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
//http routes
app.post('/user/login', user_requests_1.default.login);
app.post('/user/register', user_requests_1.default.register);
//socket routes
io.on('connection', function (socket) {
});
var server = http.listen(12345, function () {
    console.log('listening on *:12345');
});
