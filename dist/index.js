"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.schema = exports.db = exports.server = void 0;
var server_1 = require("./server/server");
var database_1 = require("./database/database");
var index_1 = require("./Schema/index");
var generics_1 = require("./routes/generics");
var server = {
    createServer: server_1.createServer,
    enRouter: server_1.enRouter
};
exports.server = server;
var routes = {
    createData: generics_1.createData,
    checkRequired: generics_1.checkRequired,
    getOneData: generics_1.getOneData,
    deleteData: generics_1.deleteData
};
exports.routes = routes;
var db = {
    connectDB: database_1.connectDB
};
exports.db = db;
var schema = {
    userSchemas: index_1.userSchemas
};
exports.schema = schema;
