import { FastifyInstance } from "fastify";
import fastifyMongodb from "fastify-mongodb";
import mongoose from "mongoose";

function mongoConnection(fastify: FastifyInstance) {
    fastify.register(fastifyMongodb, {
        url: "mongodb://localhost:27017/Library",
    })
    mongoose.connect("mongodb://localhost:27017/Library")
}

export {mongoConnection}