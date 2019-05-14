import { Sequelize } from 'sequelize';
import config from './config';

const {
	database,
	user,
	password,
	host,
	port,
	dialect
} = config.db;

const DatabaseConnection = () => {
	return new Sequelize(`${dialect}://${user}:${password}@db:${port}/${database}`);
}

export default DatabaseConnection;
