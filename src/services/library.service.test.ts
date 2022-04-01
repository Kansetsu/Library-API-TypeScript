// import libraryService from "./library.service"

// let service = new libraryService()

// const book = {
//     name: "teste",
//     authorID: "123",
//     publishingCompany: "teste",
//     price: 10,
//     description: "teste",
//     category: "teste",
//     publicationDate: "2022-02-23",
//     language: "teste",
//     pages: 10
// }

// const author = {
//     name: "author test",
//     age: 1,
//     birthDate: "2022-03-24",
//     _id: "123"
// }

// let deleteResultTrue: object = {
//     acknowledged: true,
//     deletedCount: 1
// }
// let deleteResultFalse: object = {
//     acknowledged: true,
//     deletedCount: 0
// }

// jest.mock("../schema/library.schema", () => {
//     const library: { authors: any[], books: any[] } = {
//         authors: [],
//         books: []
//     }

//     return {
//         bookModel: {
//             create: (dataInsert: object) => {
//                 library.books.push(dataInsert)
//                 return dataInsert
//             },
//             findOne: (filter: { value1?: string, value2?: string }) => {
//                 for (let i = 0; i < library.books.length; i++) {
//                     if (library.books[i] == filter.value1 || library.books[i] == filter.value2) {
//                         console.log(library.books[i]);
                        
//                         return library.books[i]
//                     }
//                 }
//             },
//             find: (filter: { value1?: number | string, value2?: number | string }) => {
//                 if (filter.value1 || filter.value2) {
//                     for (let i = 0; i < library.books.length; i++) {
//                         if (library.books[i] == filter.value1 || library.books[i] == filter.value2) {
//                             return library.books[i]
//                         }
//                     }
//                 } else {
//                     for (let i = 0; i < library.books.length; i++) {
//                         return library.books[i]
//                     }
//                 }
//             },
//             findOneAndUpdate: (name: string, update: object) => {
//                 for (let i = 0; i < library.books.length; i++) {
//                     if (name == library.books[i]) {
//                         library.books[i] = { ...library.books[i], ...update }
//                     }
//                 }
//                 return update
//             },
//             deleteOne: (filter: { name: string }) => {
//                 for (let i = 0; i < library.books.length; i++) {
//                     if (filter.name == library.books[i]) {
//                         if (library.books[i].pop()) {
//                             return deleteResultTrue
//                         } else return deleteResultFalse
//                     }
//                 }
//             }
//         }
//     }
// })


// test('create a book', async () => {
//     expect(await service.create(book)).toEqual(book)
// })

// test('get a book', async () => {
//     expect(await service.getBook(book)).toEqual(book)
// })

const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection: { db: () => any; close: () => any; };
  let db: any;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
      const users = db.collection('users');
    
      const mockUser = {_id: 'some-user-id', name: 'John'};
      await users.insertOne(mockUser);
    
      const insertedUser = await users.findOne({_id: 'some-user-id'});
      expect(insertedUser).toEqual(mockUser);
    });
    
});
