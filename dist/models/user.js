"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var user_1 = require("../Schema/user");
exports.User = mongoose_1.model("User", user_1.UserSchema);
