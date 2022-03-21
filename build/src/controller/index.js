"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerPluginDoc = exports.controllerPlugin = void 0;
const library_controller_1 = require("./library.controller");
async function controllerPlugin(app, opts) {
    app.register(library_controller_1.libraryControllerPlugin, {
        prefix: "/library"
    });
}
exports.controllerPlugin = controllerPlugin;
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
