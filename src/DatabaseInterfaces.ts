import Sequelize from 'sequelize';

interface SchemaDefinition {
  name: string,
  attributes: Sequelize.ModelAttributes,
  options: Sequelize.ModelOptions
}

export { SchemaDefinition }