"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
    name: { type: String },
    age: { type: Number },
    birthDate: { type: String }
});
exports.authorModel = mongoose_1.default.model("author", authorSchema);
