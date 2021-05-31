"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.server = void 0;
var server_1 = require("./server/server");
var database_1 = require("./database/database");
var server = {
    createServer: server_1.createServer
};
exports.server = server;
var database = {
    connectDB: database_1.connectDB
};
exports.database = database;
