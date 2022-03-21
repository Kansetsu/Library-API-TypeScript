import libraryService from "./library.service"

let service = new libraryService()
const livro = {
    name: "testes",
    author: "testado",
    publishingCompany: "testadora",
    price: 10,
    description: "testado com sucesso",
    category: "teste",
    publicationDate: "2022-02-23",
    language: "Portugues",
    pages: 10
}

jest.mock("../schema/library.schema", () => {
    const dbData: any[] = []
    return {
        create: (dataInsert: any) => {
            dbData.push(dataInsert)
            return dataInsert
        },
        find: (options?: any) => {
            if (options && options.limit) {
                return dbData.slice(0, options.limit)
            }
            return dbData
        },
        findOneAndDelete: (name: any) => {
            if (dbData.pop()) {
                return 0

            } else return 1
        },
        findAndUpdate: (updateObj: any, options: any) => {
            const obj = dbData[options.where.id - 1]
            dbData[options.where.id - 1] = { ...obj, ...updateObj }
        }

    }
})



test('create a book', async () => {
    expect(await service.create(livro)).toEqual(livro)
})

test('get all books', async() => {
    expect(await service.getAll()).toEqual([livro])
})

test('get a specific number of books', async () => {
    expect(await service.paginate(1)).toEqual([livro])
})

test('get a book for ID', async () => {
    expect(await service.getBook("name")).toEqual(livro)
})

test('delete a book for ID', async () => {
    expect(await service.delete("name")).toEqual({ ...livro, "deleted": 0 })
})

test('update a book', async () => {
    expect(await service.update("name", { nome: "teste" })).toEqual({ nome: "teste" })
})