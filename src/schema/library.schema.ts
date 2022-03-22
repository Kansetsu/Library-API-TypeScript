import { ObjectId } from "mongodb"
import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    name: { type: String },
    authorID: { type: ObjectId },
    publishingCompany: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    publicationDate: { type: String },
    language: { type: String },
    pages: { type: Number }
})

const authorSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    birthDate: { type: String }

})

export const bookModel = mongoose.model("books", bookSchema)
export const authorModel = mongoose.model("author", authorSchema)