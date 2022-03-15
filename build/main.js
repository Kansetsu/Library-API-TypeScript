"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const db_config_1 = require("./src/config/db.config");
const library_controller_1 = require("./src/controller/library.controller");
const server = (0, fastify_1.default)({ logger: true });
(0, db_config_1.mongoConnection)(server);
(0, db_config_1.mongoConnection)(library_controller_1.router);
server.listen(8080, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
