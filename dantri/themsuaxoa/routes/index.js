var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET thêm dữ liệu */
router.get('/', function(req, res, next) {
  res.render('them', { title: 'Thêm mới dữ liệu' });
});

module.exports = router;

