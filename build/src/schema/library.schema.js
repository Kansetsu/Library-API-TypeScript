"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: { type: String },
    author: { type: String },
    publishingCompany: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    publicationDate: { type: String },
    language: { type: String },
    pages: { type: Number }
});
exports.bookModel = mongoose_1.default.model("books", bookSchema);
