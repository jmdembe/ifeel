  'use strict';

  var express = require('express');
  var moodModel = require('../models/mood');
  var router = express.Router();

  router.get('/', function getAll(req, res) {
    moodModel.getAll (function moodData(err, data) {
      if (err) {
        console.error(err);
        res.status(500).send("I dont know what is wrong with the server...");
        return;
      }
      console.log("i am inside moodModel.getAll");
      res.json(data);
      console.log("done receiving data");
    });
  });

  router.post('/', function createToday(req, res) {
    moodModel.createToday (req.body, function createData(err, data) {
      console.log('log 1', req.body);
      if (err) {
        console.error(err);
        res.status(500).send("I dont know what is wrong with the server...");
        return;
      }
      res.json({
        'id' :data.ops[0]._id,
        'date': data.ops[0].date,
        'mood': data.ops[0].mood,
        'entry': data.ops[0].entry,
        'profile': data.ops[0].profile
      });
    });
  });

  module.exports=router;
