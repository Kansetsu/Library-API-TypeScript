import { FastifyInstance } from "fastify";
import fastifyMongodb from "fastify-mongodb";
import mongoose from "mongoose";

function mongoConnection(fastify: FastifyInstance) {
    fastify.register(fastifyMongodb, {
        url: process.env.URL,
    })
    if (process.env.URL) {
        mongoose.connect(process.env.URL)
    }
}

export { mongoConnection }