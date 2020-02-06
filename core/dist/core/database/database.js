"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var Database = /** @class */ (function () {
    function Database() {
    }
    /*
        @type
            void
        @params
            result: any, error: MysqlError
    */
    Database.query = function (query, params, callback) {
        this.connection.query(query, params, function (err, result, fields) {
            if (err) {
                callback(null, err);
                return;
            }
            callback(result, null);
        });
    };
    Database.connection = mysql_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'Chat',
        port: 3306,
        password: ''
    });
    return Database;
}());
exports.default = Database;
