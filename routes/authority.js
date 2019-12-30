var express = require('express');
var router = express.Router();
var role = require('../models/role/role')
// 获取权限(列表)
router.get('/getAuthority', async (req, res) => {
      if (!req.query.id) {
            res.send({ status: 404, msg: 'id不能为空' })
            return
      }
      role.find({ userId: req.query.id }).populate('authorityId').populate('userId').exec(function (err, result) {
            if (!err) {
                  res.send({ status: 200, msg: '查询成功', result })
                  return
            }
            res.send(err)
      })
})
// 添加权限
router.get('/addAuthority',async (req,res)=>{
      const {code,content} =req.query;
      if(!content||!code){
            res.send({status:500,msg:"格式不规范"})
            return
      }
      const result = await role.create({code,content})
      res.send(result)
})

module.exports = router