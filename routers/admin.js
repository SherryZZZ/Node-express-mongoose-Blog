var express = require('express');
var router = express.Router();
// console.log(express);
// console.log(router.get);
router.get('/user',function (req,res,next) {
    res.send('Admin-User');
});
// 返回数据
module.exports = router;