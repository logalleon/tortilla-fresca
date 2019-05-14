import { Router } from 'express';
import DummyRouter from './Dummy/router';
import { Sequelize } from 'sequelize/types';

export default (connection: Sequelize): Router => {
    const router = Router();
    router.get('/status', (req, res) => {
      res.send(200);
    });
    router.use(DummyRouter(connection));
    return router;
};
