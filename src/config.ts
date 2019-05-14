const { env: ENV } = process;

export default {

	/**
	 * Database configuration settings
	 */
	db: {
		database: 'tortilla-fresca',
		user: 'root',
		password: 'root',
		host: 'localhost',
		port: ENV.DB_PORT || 3306,
		dialect: 'mysql'
	},

	/**
	 * Server configuration settings
	 */
	server: {
		port: ENV.PORT || 1337,
    root: __dirname
	},

};
