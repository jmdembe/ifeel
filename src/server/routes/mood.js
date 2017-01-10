  'use strict';

  var express = require('express');
  var moodModel = require('../models/mood');
  var router = express.Router();

  router.get('/', function getAll(req, res) {
    moodModel.getAll (function moodData(err, moodRecords) {
      if (err) {
        console.error(err);
        res.status(500).send("I dont know what is wrong with the server...");
        return;
      }
      console.log("i am inside router.getAll", moodRecords);
      res.json(moodRecords);
    });
  });

  router.post('/', function createToday(req, res) {
    console.log('received data to store', req.body);
    moodModel.createToday (req.body, function createData(err, data) {
      console.log('inside creating record callback', data);
      if (err) {
        console.error(err);
        res.status(500).send("I dont know what is wrong with the server...");
        return;
      }
      res.json({
        'id' :data.ops[0]._id,
        'createTime': data.ops[0].createTime,
        'mood': data.ops[0].mood,
        'entry': data.ops[0].entry,
        'profile': data.ops[0].profile
      });
    });
  });

  module.exports=router;
