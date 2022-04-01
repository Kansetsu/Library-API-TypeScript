import fastify from "fastify"
import { controllerPlugin, controllerPluginDoc, controllerPluginAuthor } from "./src/controller"
import { mongoConnection } from "./src/config/db.config"
import { config } from "dotenv"

config()
const server = fastify({ logger: true })
console.log(process.env);

mongoConnection(server)

server.register(controllerPlugin)
server.register(controllerPluginAuthor)
server.register(controllerPluginDoc)

server.listen(8080, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)

    }
    console.log(`Server listening at ${address}`)
})