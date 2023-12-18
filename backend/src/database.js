const mysql = require('mysql2');
const { ServerConfig } = require('./config');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: ServerConfig.DB_USER,
    password: ServerConfig.DB_PASSWORD,
    database: ServerConfig.DB_NAME
});