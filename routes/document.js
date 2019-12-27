const Document = require('../models/doc/doc')
var express = require('express');
var router = express.Router();
router.get('/', function (req, result, next) {
      // const {user_id} = req.query;
      const doc =  new Document(req.query)
      doc.save((err, res)=>{
            if(err){
                  res.render('error',err)
            }
            result.send(200)
      });
});
module.exports = router





// import  Document  from "/models/doc/doc";
// const Document = require('../models/doc/doc')
// var express = require('express');
// var router = express.Router();
// router.get('/', function (req, res, next) {
//       // const {user_id} = req.query;
//       const doc = Document.create(req.query, (err, res) => {
//             if (err) {
//                   res.render('error', err)
//             }
//             res.send(200)
//       })
//       // res.render('index', { title: 'Express' });
// });
// module.exports = router