"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerPluginAuthor = exports.controllerPluginDoc = exports.controllerPlugin = void 0;
const library_controller_1 = require("./library.controller");
const author_controller_1 = require("./author.controller");
async function controllerPlugin(app, opts) {
    app.register(library_controller_1.libraryControllerPlugin, {
        prefix: "/"
    });
}
exports.controllerPlugin = controllerPlugin;
async function controllerPluginAuthor(app, opts) {
    app.register(author_controller_1.authorControllerPlugin, {
        prefix: "/"
    });
}
exports.controllerPluginAuthor = controllerPluginAuthor;
async function controllerPluginDoc(app, opts) {
    app.register(require('fastify-swagger'), {
        routePrefix: "/library/doc",
        mode: 'static',
        specification: {
            path: './doc/swagger_output.json'
        },
        exposeRoute: true
    });
}
exports.controllerPluginDoc = controllerPluginDoc;
