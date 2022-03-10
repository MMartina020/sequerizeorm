/*
npm i sequelize
npm i mariadb
*/

const config = require('./config');
const {Sequelize} = require('sequalize');

const db = new Sequelize(config.database, config.user, config.password);
    host: config.localhost, 
    port: config.port, 
    dialect: "mariadb"
