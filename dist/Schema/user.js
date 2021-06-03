"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullNameUserSchema = exports.UsernameUserSchema = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.UsernameUserSchema = exports.UserSchema.add({
    username: {
        type: String,
        required: true,
        unique: true
    }
});
exports.FullNameUserSchema = exports.UserSchema.add({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});