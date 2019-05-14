import express from 'express';
import bodyParser from 'body-parser';
import path, { join } from 'path';
import config from './config';
import DatabaseConnection from './DatabaseConnection';
import sequelize, { Promise } from 'sequelize';
import { DummySchema } from './Dummy/model';
import Router from './Router';

(async () => {
    try {

      // Setup yer connection, you dummy
      const connection = DatabaseConnection();
      await connection.authenticate();
      await connection.define(DummySchema.name, DummySchema.attributes, DummySchema.options);
      await connection.sync();

      // Give me express or give me death
      const app = express();

      // Body parser fun
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded());

      // Bind the connection to app.locals just in case you need it
      app.locals.connection = connection;

      // Configure the application router
      const router = Router(connection);
      app.use(router);

      // Serve static files, etc.
      app.use(express.static(path.join(__dirname, '../public'), { extensions: [ 'html' ] }));

      // Start the server
      app.listen(config.server.port, (err: Error) => {
        if (err) {
          throw err;
        }
        console.log(`Hello from Tortilla Fresca @${config.server.port}!`);
      });
    } catch (e) {
      // Like you're going to handle this, lol
      console.log(e);
    }
})();
