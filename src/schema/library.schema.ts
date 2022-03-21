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

export const bookModel = mongoose.model("books", bookSchema)
