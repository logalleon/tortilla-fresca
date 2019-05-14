"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const name = 'dummy';
const attributes = {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING
    },
};
const options = {
    timestamps: false
};
const DummySchema = {
    name,
    attributes,
    options
};
exports.DummySchema = DummySchema;
