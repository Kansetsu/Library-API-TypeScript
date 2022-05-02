import { bookModel } from "../schema/library.schema";
import { version } from "../../package.json";

export default class libraryService {
    public create(dataInsert: any): object {
        return bookModel.create(dataInsert);
    }

    public getVersion(): any {
        return { version };
    }

    public getAll(): object {
        return bookModel.aggregate([
            {
                $lookup: {
                    from: "authors",
                    localField: "authorID",
                    foreignField: "_id",
                    as: "author",
                },
            },

            {
                $unwind: "$author",
            },
        ]);
    }

    public getBookByName(filter: { name?: string; author?: string }): object {
        return bookModel.findOne({ ...filter });
    }

    public paginate(filter: { page: number; books: number }): object {
        return bookModel
            .find()
            .limit(filter.books)
            .skip((filter.page - 1) * filter.books);
    }

    public getBookByAuthor(filter: { author: string }): object {
        return bookModel.find(filter);
    }

    public getBookByCategory(filter: { category?: string; author?: string }): object {
        return bookModel.findOne({ ...filter });
    }
    public getBookByCategoryAndPaginate(categoryFilter: { category: string }, filter: { page: number; books: number }): object {
        return bookModel
            .find( categoryFilter )
            .limit(filter.books)
            .skip((filter.page - 1) * filter.books);
    }

    public update(name: string, update: object): object {
        return bookModel.findOneAndUpdate({ name }, update, { new: true });
    }

    public delete(filter: { name: string }): object {
        return bookModel.deleteOne(filter);
    }
}
