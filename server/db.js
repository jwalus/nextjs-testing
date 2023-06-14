const pgp = require('pg-promise')();
require('dotenv').config();

const connectionURL = process.env.DB_CONNECTION_URL;

const db = pgp(connectionURL);

module.exports = db;