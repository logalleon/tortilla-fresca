"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const DatabaseConnection_1 = __importDefault(require("./DatabaseConnection"));
const model_1 = require("./Dummy/model");
const Router_1 = __importDefault(require("./Router"));
(async () => {
    try {
        // Setup yer connection, you dummy
        const connection = DatabaseConnection_1.default();
        await connection.authenticate();
        await connection.define(model_1.DummySchema.name, model_1.DummySchema.attributes, model_1.DummySchema.options);
        await connection.sync();
        // Give me express or give me death
        const app = express_1.default();
        // Body parser fun
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded());
        // Bind the connection to app.locals just in case you need it
        app.locals.connection = connection;
        // Configure the application router
        const router = Router_1.default(connection);
        app.use(router);
        // Serve static files, etc.
        app.use(express_1.default.static(path_1.default.join(__dirname, '../public'), { extensions: ['html'] }));
        // Start the server
        app.listen(config_1.default.server.port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Hello from Tortilla Fresca @${config_1.default.server.port}!`);
        });
    }
    catch (e) {
        // Like you're going to handle this, lol
        console.log(e);
    }
})();
