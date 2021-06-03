"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFullnamemodelName = exports.setUsernamemodelName = exports.setUsermodelName = exports.FullNameUser = exports.UsernameUser = exports.User = void 0;
var mongoose_1 = require("mongoose");
var user_1 = require("../Schema/user");
// Export of the 3 basic users with Model name of User
exports.User = mongoose_1.model("User", user_1.UserSchema);
exports.UsernameUser = mongoose_1.model("User", user_1.UsernameUserSchema);
exports.FullNameUser = mongoose_1.model("User", user_1.FullNameUserSchema);
//Export of 3 functions to set the name of the model (Default will be User)
function setUsermodelName(name) {
    if (name === void 0) { name = "User"; }
    return mongoose_1.model(name, user_1.UserSchema);
}
exports.setUsermodelName = setUsermodelName;
function setUsernamemodelName(name) {
    if (name === void 0) { name = "User"; }
    return mongoose_1.model(name, user_1.UsernameUserSchema);
}
exports.setUsernamemodelName = setUsernamemodelName;
function setFullnamemodelName(name) {
    if (name === void 0) { name = "User"; }
    return mongoose_1.model(name, user_1.FullNameUserSchema);
}
exports.setFullnamemodelName = setFullnamemodelName;
