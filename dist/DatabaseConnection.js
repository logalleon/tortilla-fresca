"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const { database, user, password, host, port, dialect } = config_1.default.db;
const DatabaseConnection = () => {
    return new sequelize_1.Sequelize(`${dialect}://${user}:${password}@db:${port}/${database}`);
};
exports.default = DatabaseConnection;
