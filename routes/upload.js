const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const url = path.join(__dirname, '..', 'public', 'images')
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, url)
      },
      filename: function (req, file, cb) {
            cb(null, file.originalname)
      }
})
const upload = multer({ storage })
router.post('/add', upload.any(), (req, res, next) => {
      res.send(req.files)
});
router.get('/remove', (req, res) => {
      console.log(req.body)
      req.body.path && deleteFile(req.body.path, (err) => {
            if (err) {
                  res.send(err)
                  return
            }
            res.send({massage:'删除成功',path:req.body.path})
      })
});


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

