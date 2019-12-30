const db = require('../../mongodb/db')
const Schema = require('mongoose').Schema;
const article = new Schema({
      userId: { type: Schema.Types.ObjectId, ref: 'user' },//这里即为主表的外键，关联子表。ref后的Xbncomp代表的是子表Xbncomp的Model*/
      create_date: Date,
      update_date: Date,
      status: { type: Number, default: 1 },  //1:待审核 2:通过、3:驳回
      content: String,
      title:{ type: String },
      imageUrl:String,
      category:{type:Schema.Types.ObjectId,ref:'dict'}
});
const articleModel = db.model('article', article);
module.exports = articleModel