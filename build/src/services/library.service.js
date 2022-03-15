"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryService = void 0;
const library_schema_1 = require("../../schema/library.schema");
class libraryService {
    create(dataInsert) {
        return library_schema_1.bookModel.create(...dataInsert);
    }
    getAll() {
        return library_schema_1.bookModel.find();
    }
    getByID(id) {
        return library_schema_1.bookModel.findById(id);
    }
    paginate(pages) {
        return library_schema_1.bookModel.find().limit(pages);
    }
    getAuthor(author) {
        return library_schema_1.bookModel.find({ author });
    }
    update(id, update) {
        return library_schema_1.bookModel.findByIdAndUpdate(id, Object.assign({}, update));
    }
    delete(id) {
        return library_schema_1.bookModel.findByIdAndDelete(id);
    }
}
exports.libraryService = libraryService;
