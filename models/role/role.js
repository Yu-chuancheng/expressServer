const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const role = new Schema({
      userId:{type:Schema.Types.ObjectId,ref:'user'},
      role_name:String,
      authityId:{type:Schema.Types.ObjectId,ref:'authority'}
})
const roleModel = db.model('role',role)
module.exports = roleModel