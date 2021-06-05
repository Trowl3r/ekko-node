"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.getOneData = exports.checkRequired = exports.createData = void 0;
function createData(req, res, model, params) {
    return __awaiter(this, void 0, void 0, function () {
        var newModel, saveModel, err_1, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newModel = new model(params);
                    return [4 /*yield*/, newModel.save()];
                case 1:
                    saveModel = _a.sent();
                    return [2 /*return*/, res.json(saveModel)];
                case 2:
                    err_1 = _a.sent();
                    e = err_1;
                    console.log(e);
                    return [2 /*return*/, res.status(500).send("Internal Server Error")];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createData = createData;
function checkRequired(req, res, model, params, returnString) {
    return __awaiter(this, void 0, void 0, function () {
        var modelFound, err_2, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, model.findOne(params)];
                case 1:
                    modelFound = _a.sent();
                    if (modelFound) {
                        return [2 /*return*/, res.status(400).send(returnString)];
                    }
                    return [2 /*return*/, ""];
                case 2:
                    err_2 = _a.sent();
                    e = err_2;
                    console.log(e);
                    return [2 /*return*/, res.status(500).send("Internal Server Error")];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkRequired = checkRequired;
function getOneData(req, res, model, params, returnString) {
    if (returnString === void 0) { returnString = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var modelFound, err_3, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, model.findOne(params)];
                case 1:
                    modelFound = _a.sent();
                    if (!modelFound) {
                        if (returnString === "") {
                            return [2 /*return*/, res.status(404).send("Nothing found in " + model.collection.name)];
                        }
                        else {
                            return [2 /*return*/, res.status(404).send(returnString)];
                        }
                    }
                    return [2 /*return*/, res.json(modelFound)];
                case 2:
                    err_3 = _a.sent();
                    e = err_3;
                    console.log(e);
                    return [2 /*return*/, res.status(500).send("Internal Server Error")];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getOneData = getOneData;
function deleteData(req, res, model, params, returnString, modelReturn) {
    if (returnString === void 0) { returnString = ""; }
    if (modelReturn === void 0) { modelReturn = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var deleteModel, err_4, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, model.findOne(params)];
                case 1:
                    deleteModel = _a.sent();
                    if (!deleteModel) {
                        if (returnString === "") {
                            return [2 /*return*/, res.status(404).send("Nothing found in " + model.collection.name)];
                        }
                        else {
                            return [2 /*return*/, res.status(404).send(returnString)];
                        }
                    }
                    if (modelReturn !== "") {
                        return [2 /*return*/, res.json({ msg: modelReturn })];
                    }
                    return [4 /*yield*/, deleteModel.remove()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.json(deleteModel)];
                case 3:
                    err_4 = _a.sent();
                    e = err_4;
                    console.log(e);
                    return [2 /*return*/, res.status(500).send("Internal Server Error")];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteData = deleteData;
