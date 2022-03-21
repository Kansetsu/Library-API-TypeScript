"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryControllerPlugin = void 0;
const library_service_1 = __importDefault(require("../services/library.service"));
//const router: FastifyInstance = Fastify({})
const service = new library_service_1.default;
// ---IMPORTANT---
//The comments below are generating information in swagger_output.json for their creation
async function libraryControllerPlugin(router, opts) {
    router.post('/', async (request, reply) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Create a book'
        // #swagger.description = 'This route will be responsible for create a book in your database'
        /* #swagger.parameters['book'] = {
            in: 'body',
            description: 'Book information',
            required: true,
            schema: { $ref: "#/definitions/Book"}
        }*/
        reply.send(await service.create(request.body));
    });
    router.get('/', async (request, reply) => {
        // #swagger.tags = ['Library']    
        // #swagger.summary = 'Get all books'
        // #swagger.description = 'Get all books'
        reply.send(await service.getAll());
    });
    router.get('/book', async (request, reply) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Search for a book'
        // #swagger.description = 'Search for a book using  name or  (If you pass no parameter it returns the first element from your database)'
        // #swagger.parameters['name'] = { description: 'Book name' } 
        // #swagger.parameters['author'] = { description: 'Author name'} 
        reply.send(await service.getBook(request.query));
    });
    router.get('/paginate', async (request, reply) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Get a limited number of books'
        // #swagger.description = 'Get a limited number of books'
        // #swagger.parameters['page'] = { description: 'Number of pages', required: true }  
        // #swagger.parameters['books'] = { description: 'Number of books for pages', required: true}  
        console.log(request.query);
        reply.send(await service.paginate(request.query));
    });
    router.get('/author', async (request, reply) => {
        // #swagger.tags = ['Library']
        // #swagger.summary = 'Find books by the selected author'
        // #swagger.description = 'Finds books by the selected author'
        // #swagger.parameters['author'] = { description: 'Name of the author' }  
        reply.send(await service.getAuthor(request.query));
    });
    router.put('/update/:name', async (request, reply) => {
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
        reply.send(await service.update(request.params.name, request.body));
    });
    router.delete('/delete', async (request, reply) => {
        // #swagger.summary = 'Delete a book'
        // #swagger.description = 'Delete a book in database'
        // #swagger.parameters['name'] = { description: 'Book to delete', required: true }
        // #swagger.tags = ['Library']
        reply.send(await service.delete(request.query));
    });
}
exports.libraryControllerPlugin = libraryControllerPlugin;
