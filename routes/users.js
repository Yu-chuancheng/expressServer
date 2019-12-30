var express = require('express');
var router = express.Router();
var userModel = require('../models/user/user')
// 登录
router.post('/login', async function (req, res, next) {
  const result = await userModel.find(req.query);
  if (result) {
    res.send(result)
  } else {
    res.send(404)
  }
});
//修改user
router.put('/userEdit',async (req,res)=>{
  const content = req.query;
  const update ={};
  for (const key in content) {
    if (content.hasOwnProperty(key)) {
      if(key!='id'){
        update[key] =content[key] 
      }
    }
  }
  const result =await userModel.findByIdAndUpdate(req.query.id, update) 
  result?res.send({status:200,msg:'修改成功'}):res.send({status:500,msg:'修改失败'})
})
router.delete('/userDelete',async (req,res)=>{
  const result =await userModel.findByIdAndRemove(req.query.id)
  result?res.send({status:200,msg:'删除成功'}):res.send({status:200,msg:'删除失败'})
})
router.post('/userAdd',async (req,res)=>{
  const result =await userModel.create(req.query)
  if(result){res.send({status:200,msg:'添加成功',result})}
  // resultCallBack(result,()=>{res.send({status:200,msg:'添加成功',result})},res)
})
function resultCallBack(result,then,res){
  if(then){return}
  result.then(then).catch(err=>{
    res.send(err)
  })
}

module.exports = router;
