import { Sequelize } from "sequelize";
import dotnev from "dotenv";

const ENV = dotnev.config().parsed;
const connection = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
  port: 3306,
});

export default connection;
