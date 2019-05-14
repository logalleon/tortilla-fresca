"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = __importDefault(require("./Dummy/router"));
exports.default = (connection) => {
    const router = express_1.Router();
    router.get('/status', (req, res) => {
        res.send(200);
    });
    router.use(router_1.default(connection));
    return router;
};
