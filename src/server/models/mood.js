'use strict';
var dbConnect=require('./db-connect');

module.exports = {
  getAll,
  getToday,
  createToday
};

function getAll(done) {
  dbConnect(function connectHandler(err, db) {
    if (err) {
      done(err, null);
      return;
    }

    db.collection('mood')
      .find();
  });
}

function getToday() {

}

function createToday(data, done) {
  dbConnect(function connectHandler(err, db) {
        if (err) {
          done(err, null);
          return;
        }

        data.createTime = Date.now();
        db.collection('moodData')
            .insert(data, done);
    });
}
