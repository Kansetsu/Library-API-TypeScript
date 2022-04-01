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
const server = (0, fastify_1.default)({ logger: true });
console.log(process.env);
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
