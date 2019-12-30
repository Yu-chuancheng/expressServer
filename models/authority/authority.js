const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const authority = new Schema({
      id: String,
      code:String,
      content:String,
});
const authorityModel =db.model('authority', authority);
module.exports =authorityModel

