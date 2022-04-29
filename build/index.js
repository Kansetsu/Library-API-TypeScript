"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const controller_1 = require("./src/controller");
const db_config_1 = require("./src/config/db.config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server = (0, fastify_1.default)({ logger: true, exposeHeadRoutes: true });
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
(0, db_config_1.mongoConnection)(server);
server.register(controller_1.controllerPlugin);
server.register(controller_1.controllerPluginAuthor);
server.register(controller_1.controllerPluginDoc);
server.listen(8080, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
