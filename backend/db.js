const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb://localhost:27017/shop';

let _db;

const initDb = callback => {

    if (_db) {
        console.log('Database already initialized!');
        return callback(null, _db);
    }

    MongoClient.connect(mongoDbUrl)
        .then(client => {
            _db = client.db();
            console.log('Database initialized!');
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        });
}

const getDb = () => {


    if (_db) {
        return _db;
    }
    throw Error('Database not initialized!');
}

module.exports = {
    initDb,
    getDb
};
