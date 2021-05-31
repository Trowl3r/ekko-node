"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var express_1 = __importDefault(require("express"));
var createServer = function (middleware) {
    if (middleware === void 0) { middleware = []; }
    var app = express_1.default();
    app.use(express_1.default.json());
    for (var _i = 0, middleware_1 = middleware; _i < middleware_1.length; _i++) {
        var entry = middleware_1[_i];
        app.use(eval(entry));
    }
    return app;
};
exports.createServer = createServer;
