import libraryService from "../services/library.service"

const service = new libraryService

// ---IMPORTANT---
//The comments below are generating information in swagger_output.json for their creation

async function libraryControllerPlugin(router: any, opts: any) {
    

    router.post('/library/create', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Create a book'
        // #swagger.description = 'This route will be responsible for create a book in your database'
        /* #swagger.parameters['book'] = {
            in: 'body',
            description: 'Book information',
            required: true,
            schema: { $ref: "#/definitions/Book"}
        }*/
        reply.send(await service.create(request.body))
    })

    router.get('/library/version', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']    
        // #swagger.summary = 'Get project version'
        // #swagger.description = 'Get project version'
        reply.send(service.getVersion())
    })

    router.get('/library/all', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']    
        // #swagger.summary = 'Get all books'
        // #swagger.description = 'Get all books'
        reply.send(await service.getAll())
    })

    router.get('/library/book', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Get a book'
        // #swagger.description = 'Get a book using name or author (If you pass no parameter it returns the first element from your database)'
        // #swagger.parameters['name'] = { description: 'Book name' } 
        // #swagger.parameters['author'] = { description: 'Author name'} 

        reply.send(await service.getBook(request.query))
    })

    router.get('/library/paginate', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Get a limited number of books'
        // #swagger.description = 'Get a limited number of books'
        // #swagger.parameters['page'] = { description: 'Page number', required: true }  
        // #swagger.parameters['books'] = { description: 'Number of books per page', required: true}  
        reply.send(await service.paginate(request.query))
    })

    router.get('/library/author', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Find books by the selected author'
        // #swagger.description = 'Finds books by the selected author'
        // #swagger.parameters['author'] = { description: 'Name of the author' }  
        reply.send(await service.getAuthor(request.query))
    })

    router.get('/library/category', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Get a book by category e author '
        // #swagger.description = 'Get a book by category e author (If you pass no parameter it returns the first element from your database)'
        // #swagger.parameters['category'] = { description: 'Book category'}  
        // #swagger.parameters['author'] = { description: 'Author name'}
        console.log(request.query);

        reply.send(await service.getCategory(request.query))
    })

    router.put('/library/update/:name', async (request: any, reply: any) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Update a book'
        // #swagger.description = 'Update data from a book using your ID'
        // #swagger.parameters['name'] = { description: 'Book name for Update' }
        /* #swagger.parameters['book'] = {
            in: 'body',
            description: 'Book information for update',
            required: true,
            schema: { $ref: "#/definitions/Book"}
        }*/
        reply.send(await service.update(request.params.name, request.body))
    })

    router.delete('/library/delete', async (request: any, reply: any) => {
        // #swagger.summary = 'Delete a book'
        // #swagger.description = 'Delete a book in database'
        // #swagger.parameters['name'] = { description: 'Book to delete', required: true }
        // #swagger.tags = ['Library']
        reply.send(await service.delete(request.query))
    })
}

export { libraryControllerPlugin }