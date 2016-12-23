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
      res.json(data);
    });
  });

  router.get(':/id', function getToday(req, res) {
    moodModel.getOne(req.params.id, dataRetrieved(err, data) {
      if(err) {
        console.error(err);
        res.status(500).send('Failed to retrieve your job');
        return;
      }
      res.json(data);
    });
  });

  module.exports=router;
