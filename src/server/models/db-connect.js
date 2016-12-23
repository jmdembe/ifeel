'use strict';

var uri = process.env.MONGODB_URL || 'mongodb://localhost:27017/ifeel';
var mongodb = require('mongodb');

module.exports = function connect(done) {
    mongodb.MongoClient.connect(uri, done);
};
