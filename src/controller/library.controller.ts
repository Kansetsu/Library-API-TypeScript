import Fastify, { FastifyInstance } from 'fastify'
import { libraryService } from "../services/library.service"

const server: FastifyInstance = Fastify({})
const service = new libraryService

server.post('/', async (request, reply) => {
    reply.send(await service.create())
})

server.get('/', async (request, reply) => {
    reply.send(await service.getAll())
})

server.get('/:id', async (request, reply) => {
    reply.send(await service.getByID())
})

server.get('/paginate/:pages', async (request, reply) => {
    reply.send(await service.paginate())
})

server.get('/author/:category', async (request, reply) => {
    reply.send(await service.paginate())
})

server.put('/', async (request, reply) => {
    reply.send(await service.update())
})

server.delete('/', async (request, reply) => {
    reply.send(await service.delete())
})






