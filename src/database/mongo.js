const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
    const mongo = new MongoMemoryServer();
    const mongoDBURL = await mongo.getConnectionString();
    const connection = await MongoClient.connect(mongoDBURL, { useNewUrlParser: true});
    database = connection.db();
}

async function getDatabase() {
    if (!dataabse) await startDatabase();
    return database;
}

module.exports = {
    startDatabase,
    getDatabase
}