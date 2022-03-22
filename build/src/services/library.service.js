"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_schema_1 = require("../schema/library.schema");
class libraryService {
    create(dataInsert) {
        return library_schema_1.bookModel.create(dataInsert);
    }
    getAll() {
        return library_schema_1.bookModel.find();
    }
    getBook(filter) {
        return library_schema_1.bookModel.findOne({ ...filter });
    }
    paginate(filter) {
        return library_schema_1.bookModel.find().limit(filter.books).skip((filter.page - 1) * filter.books);
    }
    getAuthor(filter) {
        return library_schema_1.bookModel.find(filter);
    }
    update(name, update) {
        return library_schema_1.bookModel.findOneAndUpdate({ name }, update, { new: true });
    }
    delete(filter) {
        return library_schema_1.bookModel.deleteOne(filter);
    }
}
exports.default = libraryService;
