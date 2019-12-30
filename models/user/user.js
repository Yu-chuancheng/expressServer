const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const user = new Schema({
      id: String,
      userName:String,
      passWord:String,
	// create_date: String,
	/*companyNameCn: {type:String,ref : "Xbncomp"}, //这里即为主表的外键，关联子表。ref后的Xbncomp代表的是子表Xbncomp的Model*/
	// companyNameCn: String,
      avatar: {type: String, default: 'default.jpg'},
});
const userModel =db.model('user', user);
module.exports =userModel

