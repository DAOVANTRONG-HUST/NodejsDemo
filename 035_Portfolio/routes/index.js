var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/*.:idsanpham', function(req, res, next) { // có thể sử dụng cách này để giải quyết 2 level mà không cần định nghĩa đường dẫn riêng
  res.render('chi-tiet-san-pham', {idsanpham: req.params.idsanpham });
});

module.exports = router;
