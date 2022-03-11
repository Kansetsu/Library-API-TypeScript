const fastify = require('fastify')()

fastify.register(require('fastify-swagger'), {
    routePrefix: "",
    swagger: {
        info: {
            title: "Library API v2",
            description: "API for safe your book",
            version: "0.1.0"
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more informtion here"
        },
        host: 'localhost:8000/ping',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'book', description: '' }],
        definitions: {
            Book: {
                nome: "string",
                autor: "string",
                editora: "string",
                preco: "number",
                descricao: "string",
                categoria: "string",
                dataPublicacao: "string",
                idioma: "string",
                numeroDePaginas: "number"
            }
        },
    }
})

fastify.ready(err => {
    if (err) throw err
    fastify.swagger()
})