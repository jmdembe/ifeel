'use strict';
var dbConnect=require('./db-connect');

module.exports = {
  getAll,
  createToday
};

function getAll(done) {
  dbConnect(function connectHandler(err, db) {
    if (err) {
      done(err, null);
      return;
    }

    db.collection('mood')
      .find()
      .toArray(function completedArray(err, moodRecords) {
        if(err) {
          done(err, null);
          return;
        }
        var cleanData = moodRecords.map(function moodMap(moodRecord) {
          return moodRecord;
        });
        console.log("Cleaned mood records", cleanData);
        done(null, cleanData);
      });
  });
}

function createToday(data, done) {
  dbConnect(function connectHandler(err, db) {
        if (err) {
          done(err, null);
          return;
        }

        data.createTime = Date.now();
        db.collection('mood')
            .insert(data, done);
    });
}
