"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.db = exports.server = void 0;
var server_1 = require("./server/server");
var database_1 = require("./database/database");
var index_1 = require("./Schema/index");
var server = {
    createServer: server_1.createServer
};
exports.server = server;
var db = {
    connectDB: database_1.connectDB
};
exports.db = db;
var schema = {
    userSchemas: index_1.userSchemas
};
exports.schema = schema;
