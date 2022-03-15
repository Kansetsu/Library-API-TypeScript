"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnection = void 0;
const fastify_mongodb_1 = __importDefault(require("fastify-mongodb"));
function mongoConnection(fastify) {
    fastify.register(fastify_mongodb_1.default, {
        url: "mongodb://localhost:27017/",
    });
}
exports.mongoConnection = mongoConnection;
