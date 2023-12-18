const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:path.join(__dirname, '../../.env')});

module.exports = {
    PORT: process.env.PORT,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
}