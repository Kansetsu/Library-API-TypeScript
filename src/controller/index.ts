import { libraryControllerPlugin } from "./library.controller"

async function controllerPlugin(app: any, opts: any) {
    app.register(libraryControllerPlugin, {
        prefix: "/library"
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

export { controllerPlugin, controllerPluginDoc }