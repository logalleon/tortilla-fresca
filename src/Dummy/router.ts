import { Sequelize } from "sequelize/types";
import { Router } from 'express';
import DummyController from "./index";

const DummyRouter = (connection: Sequelize): Router => {
  const router = Router();
  const controller = new DummyController(connection);
  // router.get('/posts/preview/:id', post.preview.bind(post));
  // router.get('/api/post', post.fetchAll.bind(post));
  // router.get('/api/post/:id', post.fetchOne.bind(post));
  // router.post('/api/post', post.save.bind(post));
  // router.patch('/api/post/:id', post.update.bind(post));
  return router;
};

export default DummyRouter;