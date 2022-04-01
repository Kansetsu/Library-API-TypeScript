import { authorModel } from "../schema/author.schema"

export default class authorService {
    public create(dataInsert: any): object {
        return authorModel.create(dataInsert)
    }

    public getAll(): object {
        return authorModel.find()
    }

    public getAuthor(filter = { name: String }): object {
        return authorModel.findOne({ filter })
    }
}