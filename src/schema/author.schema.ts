import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    birthDate: { type: String }

})

export const authorModel = mongoose.model("author", authorSchema)