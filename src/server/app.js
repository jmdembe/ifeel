'use strict';

var express=require('express');
var bodyParser = require('body-parser');
var server=express();

server.set('port', process.env.PORT || 3000);
server.use(bodyParser.json());
server.use(express.static('build/'));

server.listen(server.get('port'), function serverStarted(err){
    if (err) {
      console.error(err, 'ERROR');
    } else {
      console.log("Server located at: http://localhost:" + server.get('port'));
    }
});
