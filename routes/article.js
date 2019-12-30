const express = require('express');
const router = express.Router();
const article = require('../models/article/article');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const url = path.join(__dirname, '..', 'public', 'images')
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, url)
      },
      filename: function (req, file, cb) {
            let name = file.originalname.split('.')
            name.splice(1, 0, Date.now());
            name.splice(name.length - 1, 0, '.')
            cb(null, name.join(''))
      }
})
const upload = multer({ storage }).any()
// 添加文章
router.get('/addArticle', upload, async (req, res) => {
      req.files.length > 0 && (req.query.imageUrl = '/' + req.files[0].filename)
      req.query.create_date = new Date();
      req.query.update_date = req.query.create_date
      const result = await article.create(req.query);
      res.send({ status: 200, msg: '添加成功', result })
})

router.get('/editArticle', upload, async (req, res) => {
      const id = req.query.id;
      if (!id) {
            res.send({ status: 500, msg: 'id不能为空' })
            return
      }
      delete req.query.id
      if (req.files) {
            req.files.length > 0 && (req.query.imageUrl = '/' + req.files[0].filename)
      }
      req.query.update_date = new Date();
      const result = await article.findByIdAndUpdate(id, req.query);
      res.send({ status: 200, msg: '更新成功', result })
})


router.get('/removeArticle', async (req, res) => {
      const id = req.query.id;
      if (!id) {
            res.send({ status: 500, msg: 'id不能为空' })
            return
      }
      delete req.query.id
      const art = await article.findById(id);
      deleteFile(url + art.imageUrl.split('/').join('\\'), async(err) => {
            if (err) {
                  return
            }
            const result = await article.findOneAndDelete(id);
            res.send({ status: 200, msg: '删除成功', result })
      })

})

function deleteFile(delPath, cb) {
      try {
            /**
             * @des 判断文件或文件夹是否存在
             */
            if (fs.existsSync(delPath)) {
                  fs.unlinkSync(delPath);
            } else {
                  console.log('inexistence path：', delPath);
            }
            cb()
      } catch (error) {
            cb(err)
            console.log('del error', error);
      }
}



module.exports = router