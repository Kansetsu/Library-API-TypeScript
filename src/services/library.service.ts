import { bookModel } from "../schema/library.schema"

export default class libraryService {
    public create(dataInsert: any): object {
        return bookModel.create(dataInsert)
    }

    public getAll(): object {
        return bookModel.find()
    }

    public getBook(filter: { name?: string, author?: string }): object {
        return bookModel.findOne({ ...filter })
    }

    public paginate(filter: { limit: number, skip: number }): object {
        let newPage = filter.skip += filter.skip
        return bookModel.find().skip(filter.skip).limit(filter.limit)
    }

    public getAuthor(filter: { author: string }): object {
        return bookModel.find(filter)
    }

    public update(name: string, update: object): object {
        return bookModel.findOneAndUpdate({ name }, update, { new: true })
    }

    public delete(filter: {name: string}): object {
        return bookModel.deleteOne(filter)
    }
}