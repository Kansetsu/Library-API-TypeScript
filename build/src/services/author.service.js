"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_schema_1 = require("../schema/author.schema");
class authorService {
    create(dataInsert) {
        return author_schema_1.authorModel.create(dataInsert);
    }
    getAll() {
        return author_schema_1.authorModel.find();
    }
    getAuthor(filter = { name: String }) {
        return author_schema_1.authorModel.findOne({ filter });
    }
}
exports.default = authorService;
