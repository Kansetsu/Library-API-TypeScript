import { libraryControllerPlugin } from "./library.controller"
import { authorControllerPlugin } from "./author.controller"

async function controllerPlugin(app: any, opts: any) {
    app.register(libraryControllerPlugin, {
        prefix: "/"
    })
}

async function controllerPluginAuthor(app :any, opts: any) {
    app.register(authorControllerPlugin, {
        prefix: "/"
    })
}

async function controllerPluginDoc(app: any, opts: any) {
    app.register(require('fastify-swagger'), {
        routePrefix: "/library/doc",
        mode: 'static',
        specification: {
            path: './doc/swagger_output.json'
        },
        exposeRoute: true
    })

}

export { controllerPlugin, controllerPluginDoc, controllerPluginAuthor }