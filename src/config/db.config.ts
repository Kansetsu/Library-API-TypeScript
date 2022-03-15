import { FastifyInstance } from "fastify";
import fastifyMongodb from "fastify-mongodb";


function mongoConnection(fastify: FastifyInstance) {
    fastify.register(fastifyMongodb, {
        url: "mongodb://localhost:27017/",
    })
}

export {mongoConnection}