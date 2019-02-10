const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: "mysequelize_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
