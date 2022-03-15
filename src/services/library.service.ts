import { bookModel } from "../../schema/library.schema"

export class libraryService {
    public create(dataInsert: any): object {
        return bookModel.create(...dataInsert)
    }
    public getAll(): object {
        return bookModel.find()
    }
    public getByID(id: number): object {
        return bookModel.findById(id)
    }
    public paginate(pages: number): object {
        return bookModel.find().limit(pages)
    }

    public getAuthor(author: object): object {
        return bookModel.find({ author })
    }

    public update(id: number, update: object): object {
        return bookModel.findByIdAndUpdate(id, { ...update })
    }
    public delete(id: number): object {
        return bookModel.findByIdAndDelete(id)
    }
}

