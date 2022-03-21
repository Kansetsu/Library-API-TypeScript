import fastify from "fastify"
import { controllerPlugin, controllerPluginDoc } from "./src/controller"
import { mongoConnection } from "./src/config/db.config"

const server = fastify({ logger: true })

mongoConnection(server)

server.register(controllerPlugin)
server.register(controllerPluginDoc)

server.listen(8080, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)

    }
    console.log(`Server listening at ${address}`)
})