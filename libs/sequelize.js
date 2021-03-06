const { Sequelize } = require("sequelize");
const setupModels = require('../db/models');
const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "mysql",
  logging: true,
});

setupModels(sequelize);
// sequelize.sync(); //Create tables in base to the models NOT FOR PRODUCTION

module.exports = sequelize;
