"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeServer = void 0;
var express_1 = __importDefault(require("express"));
var makeServer = function () {
    var app = express_1.default();
    app.use(express_1.default.json());
    return app;
};
exports.makeServer = makeServer;
