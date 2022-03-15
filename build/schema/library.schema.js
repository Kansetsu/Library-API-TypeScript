"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    author: String,
    publishingCompany: String,
    price: Number,
    description: String,
    category: String,
    publicationDate: String,
    language: String,
    pages: Number
});
exports.bookModel = mongoose_1.default.model("books", bookSchema);
