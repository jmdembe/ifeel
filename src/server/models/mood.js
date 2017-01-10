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
      .toArray(function completedArray(err, data) {
        var cleanData = data.map(function moodMap(data) {
          return {
            "entry": data.entry,
            "mood": data.mood,
            "postDate": data.postDate
          };
        });
        done(err, cleanData);
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
        db.collection('moodData')
            .insert(data, done);
    });
}
