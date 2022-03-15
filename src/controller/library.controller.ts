import Fastify, { FastifyInstance } from 'fastify'
import { libraryService } from "../services/library.service"

const router: FastifyInstance = Fastify({})
const service = new libraryService

router.post('/library', async (request, reply) => {
    reply.send(await service.create(request.body))
})

router.get('/library', async (request, reply) => {
    reply.send(await service.getAll())
})

router.get('/library/:id', async (request, reply) => {
    reply.send(await service.getByID(request.id))
})

router.get('/library/paginate/:pages', async (request, reply) => {
    reply.send(await service.paginate(request.id))
})

router.get('/library/author/:category', async (request, reply) => {
    reply.send(await service.getAuthor(request))
})

router.put('/', async (request, reply) => {
    reply.send(await service.update(request.id, request))
})

router.delete('/', async (request, reply) => {
    reply.send(await service.delete(request.id))
})

export {router} 



