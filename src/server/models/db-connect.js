'use strict';
var mongodb = require('mongodb');

module.exports = function connect(done) {
    mongodb.MongoClient.connect(done);
};
