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

    public paginate(filter: { page: number, books: number }): object {
        return bookModel.find().limit(filter.books).skip((filter.page - 1) * filter.books)
    }

    public getAuthor(filter: { author: string }): object {
        return bookModel.find(filter)
    }

    public getCategory(filter: { category?: string, author?: string }): object {
        return bookModel.findOne({ ...filter })
    }

    public update(name: string, update: object): object {
        return bookModel.findOneAndUpdate({ name }, update, { new: true })
    }

    public delete(filter: { name: string }): object {
        return bookModel.deleteOne(filter)
    }
}