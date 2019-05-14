"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./index"));
const DummyRouter = (connection) => {
    const router = express_1.Router();
    const controller = new index_1.default(connection);
    // router.get('/posts/preview/:id', post.preview.bind(post));
    // router.get('/api/post', post.fetchAll.bind(post));
    // router.get('/api/post/:id', post.fetchOne.bind(post));
    // router.post('/api/post', post.save.bind(post));
    // router.patch('/api/post/:id', post.update.bind(post));
    return router;
};
exports.default = DummyRouter;
