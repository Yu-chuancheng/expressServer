var express = require('express')
const router = express.Router();
const role = require('../models/role/role')
// 添加角色
router.get('/addRole', async (req, res) => {
      const { userId, role_name, authorityId } = req.query
      if (!userId || !role_name || !authorityId) {
            res.send({ status: 500, msg: "格式不规范" })
            return
      }
      const result = await role.create(req.query);
      res.send({ status: 200, msg: "添加成功", result })
})
//获取角色列表
router.get('/getRoleList',async(req,res)=>{
      const result = await role.find({});
      res.send({ status: 200, msg: "查询成功", result })
})
module.exports = router
