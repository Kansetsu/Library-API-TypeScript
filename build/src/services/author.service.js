"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_schema_1 = require("../schema/library.schema");
class authorService {
    create(dataInsert) {
        return library_schema_1.authorModel.create(dataInsert);
    }
    getAll() {
        return library_schema_1.authorModel.find();
    }
    getAuthor(filter = { name: String }) {
        return library_schema_1.authorModel.findOne({ filter });
    }
}
exports.default = authorService;
