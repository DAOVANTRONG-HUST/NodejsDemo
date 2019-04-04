var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chi-tiet', function(req, res, next) {
  res.render('chi-tiet-san-pham.ejs', { title: 'Trang chi tiet' });
});

module.exports = router;
