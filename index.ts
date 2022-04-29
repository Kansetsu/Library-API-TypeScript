import fastify from "fastify";
import { controllerPlugin, controllerPluginDoc, controllerPluginAuthor } from "./src/controller";
import { mongoConnection } from "./src/config/db.config";
import { config } from "dotenv";

config();
const server = fastify({ logger: true, exposeHeadRoutes: true });

// Wildcard OPTIONS handler for CORS preflight requests
server.route({
    method: "OPTIONS",
    url: "/*",
    handler: async (request, reply) => {
        var reqAllowedHeaders = request.headers["access-control-request-headers"];
        if (reqAllowedHeaders !== undefined) {
            reply.header("Access-Control-Allow-Headers", reqAllowedHeaders);
        }
        reply
            .code(204)
            .header("Content-Length", "0")
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Credentials", true)
            .header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
            .send();
    },
});

// CORS reply - 'Access-Control-Allow-Origin', '*' for now..
// See https://github.com/fastify/fastify-cors/issues/20
server.addHook("onRequest", function (request, reply, next) {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Credentials", true);
    next();
});

mongoConnection(server);
server.register(controllerPlugin);
server.register(controllerPluginAuthor);
server.register(controllerPluginDoc);

server.listen(8080, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
