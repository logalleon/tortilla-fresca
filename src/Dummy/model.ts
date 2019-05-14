import Sequelize, { INTEGER, STRING } from 'sequelize';
import { SchemaDefinition } from '../DatabaseInterfaces';

interface DummyAttributes {
  id: number,
  name: string,
}

const name: string = 'dummy';

const attributes: Sequelize.ModelAttributes = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
};

const options: Sequelize.ModelOptions = {
  timestamps: false
}

const DummySchema: SchemaDefinition = {
  name,
  attributes,
  options
}

export { DummySchema, DummyAttributes };