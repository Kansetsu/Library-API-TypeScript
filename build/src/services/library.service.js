"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_schema_1 = require("../schema/library.schema");
const package_json_1 = require("../../package.json");
class libraryService {
    create(dataInsert) {
        return library_schema_1.bookModel.create(dataInsert);
    }
    getVersion() {
        return { version: package_json_1.version };
    }
    getAll() {
        return library_schema_1.bookModel.aggregate([
            {
                $lookup: {
                    from: "authors",
                    localField: "authorID",
                    foreignField: "_id",
                    as: "author"
                }
            },
            {
                $unwind: "$author"
            }
        ]);
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
    getCategory(filter) {
        return library_schema_1.bookModel.findOne({ ...filter });
    }
    update(name, update) {
        return library_schema_1.bookModel.findOneAndUpdate({ name }, update, { new: true });
    }
    delete(filter) {
        return library_schema_1.bookModel.deleteOne(filter);
    }
}
exports.default = libraryService;
