const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const dict = new Schema({
      code:String,
      name:String
});
const dictModel = db.model('dict', dict);
module.exports = dictModel