'use strict';

var mongoose = require('mongoose');
var config = require('../config/config-lite')
mongoose.connect(config.url, {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  console.log('连接数据成功')
  console.log(config.url)
})

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function () {
  console.log('数据库断开，重新连接数据库');
  mongoose.connect(config.url, {useNewUrlParser: true,useUnifiedTopology: true});
});

module.exports = db;
