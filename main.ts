import fastify from "fastify";
import { mongoConnection } from "./src/config/db.config";
import { router } from "./src/controller/library.controller";
const server = fastify({ logger: true })

mongoConnection(server)
mongoConnection(router)

server.listen(8080, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)

    }
    console.log(`Server listening at ${address}`);
})