const swaggerAutogen = require('swagger-autogen')()

const outputFile = './doc/swagger_output.json'
const controllerFile = ['./src/controller/library.controller.ts', "./src/controller/author.controller.ts"]

// Responsible to gerate this informations on swagger_output.json

const doc = {
    info: {
        version: "2.0.0",
        title: "Library API",
        description: "With this API you can create and safe your books and search your prefer author. This version use TypeScript as the main program language",
        contact: {
            email: "vmartins@daitan.com"
        }
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ["http"],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Book: {
            name: "Cinderella",
            author: "Patrícia Amorim",
            publishingCompany: "Vale das letras",
            price: 20.93,
            description: "A Editora Vale das Letras traz para você uma forma fácil e divertida de incentivar suas crianças a praticar a língua inglesa!",
            category: "Infantil",
            publicationDate: "2019-03-13",
            language: "Português",
            pages: 36
        },
        Author: {
            name: "Patrícia Amorim",
            age: "50",
            birthDate: "1972-01-01"
        }
    }
}


//Generate a new swagger_output.json when you start the project, starting main.ts
swaggerAutogen(outputFile, controllerFile, doc)