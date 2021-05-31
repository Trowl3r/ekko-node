"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var express_1 = __importDefault(require("express"));
var createServer = function (middlewareString) {
    if (middlewareString === void 0) { middlewareString = []; }
    var app = express_1.default();
    app.use(express_1.default.json());
    for (var _i = 0, middlewareString_1 = middlewareString; _i < middlewareString_1.length; _i++) {
        var entry = middlewareString_1[_i];
        app.use(eval(entry));
    }
    return app;
};
exports.createServer = createServer;
