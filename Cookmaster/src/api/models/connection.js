const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';
// const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const DB_NAME = 'Cookmaster';

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db(DB_NAME));

module.exports = connection;
