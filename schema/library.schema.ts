import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
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
})

export const bookModel = mongoose.model("books", bookSchema)