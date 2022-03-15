"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const fastify_1 = __importDefault(require("fastify"));
const library_service_1 = require("../services/library.service");
const router = (0, fastify_1.default)({});
exports.router = router;
const service = new library_service_1.libraryService;
router.post('/library', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.create(request.body));
}));
router.get('/library', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.getAll());
}));
router.get('/library/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.getByID(request.id));
}));
router.get('/library/paginate/:pages', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.paginate(request.id));
}));
router.get('/library/author/:category', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.getAuthor(request));
}));
router.put('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.update(request.id, request));
}));
router.delete('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send(yield service.delete(request.id));
}));
