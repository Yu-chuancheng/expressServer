const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const document = new Schema({
	user_id: Number,
	create_date: String,
	status: {type: Number, default: 1},  //1:待审核 2:通过、3:驳回
	/*companyNameCn: {type:String,ref : "Xbncomp"}, //这里即为主表的外键，关联子表。ref后的Xbncomp代表的是子表Xbncomp的Model*/
	companyNameCn: String,
      // avatar: {type: String, default: 'default.jpg'},
      content:String
});
const Document = db.model('document', document);
module.exports = Document