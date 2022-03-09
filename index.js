import express from "express";
import swaggerGenerator from 'express-swagger-generator';

import config from "./config/index.js";
import routes from "./routes/index.js";
import Mongo from './database/index.js'

class App {
    express;

    constructor() {
        (async () => {
            await this.#setUpExpress();
        })();
    }

    // facade pattern
    async #setUpExpress() {
        this.express = express();
        await this.#connectDatabase();
        this.#HandleMiddleware();
        this.#configureSwagger();
        this.#HandleRoutes();
        this.#handleExecptions();
        this.#startServer();
    }

    // to connect with database
    async #connectDatabase() {
        const mongo = new Mongo();
        await mongo.createConnection();
    }

    // register middleware
    #HandleMiddleware() {
        this.express.use(express.json());
    }

    // register routes
    #HandleRoutes() {
        this.express.use("/", routes);
    }

    // setup api documentation
    #configureSwagger() {
        const expressSwagger = swaggerGenerator(this.express);
        let options = {
            swaggerDefinition: {
                info: {
                    description: 'This is a sample server',
                    title: 'Swagger',
                    version: '1.0.0',
                },
                host: 'localhost:3000',
                basePath: '/',
                produces: [
                    "application/json",
                    "application/xml"
                ],
                schemes: ['http', 'https'],
                securityDefinitions: {
                    JWT: {
                        type: 'apiKey',
                        in: 'header',
                        name: 'authorization',
                        description: "",
                    }
                }
            },
            basedir: '', //app absolute path
            files: ['./docs/*.js'] //Path to the API handle folder
        };
        expressSwagger(options)
    }

    // start the listing server
    #startServer() {
        this.express.listen(config.port, () => {
            console.log(`Server started at ${config.port}`)
        });
    }

    #handleExecptions() {
        process
            .on('unhandledRejection', (reason, p) => {
                console.error(reason, 'Unhandled Rejection at Promise', p);
            })
            .on('uncaughtException', err => {
                console.error(err, 'Uncaught Exception thrown');
                process.exit(1);
            })
    }
}

export default new App().express;