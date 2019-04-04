var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/suadaulanh/:sodienthoai', function(req, res, next) {
  res.cookie('dt',req.params.sodienthoai, {maxAge:90000});// tạo ra một số điện thoại mà gán gia trị của nó là param.sdt
  res.send("số điện thoại là : " + req.params.sodienthoai);
});

/* GET home page. */
router.get('/banhran', function(req, res, next) {
  res.send("số điện thoại là : " + req.cookies.dt);
});

/* GET home page. */
router.get('/xoa', function(req, res, next) {
  res.clearCookie('dt');
  res.send("Đã xóa rồi");
});

module.exports = router;
