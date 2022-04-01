import authorService from "../services/author.service"

const service = new authorService

async function authorControllerPlugin(router: any, opts: any) {

    router.post("/author/create", async (request: any, reply: any) => {
        // #swagger.tags = ['Author']
        // #swagger.summary = 'Create a author'
        // #swagger.description = 'This route will be responsible for create a author in your database'
        /* #swagger.parameters['author'] = {
            in: 'body',
            description: 'Author information',
            required: true,
            schema: { $ref: "#/definitions/Author"}
        }*/
        reply.send(await service.create(request.body))
    })

    router.get("/author/all", async (request: any, reply: any) => {
        // #swagger.tags = ['Author']    
        // #swagger.summary = 'Get all authors'
        // #swagger.description = 'Get all authors'
        reply.send(await service.getAll())
    })

    router.get("/author/get", async (request: any, reply: any) => {
        // #swagger.tags = ['Author']
        // #swagger.summary = 'Search for a author'
        // #swagger.description = 'Search for a author using name (If you pass no parameter it returns the first element from your database)'
        // #swagger.parameters['author'] = { description: 'Author name'} 
        reply.send(await service.getAuthor(request.query))
    })
}

export { authorControllerPlugin }