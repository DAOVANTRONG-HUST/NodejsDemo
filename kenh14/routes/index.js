var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tin tức. */
router.get('/tin-tuc', function(req, res, next) {
  res.render('tin', { title: 'Tin tức' });
});

/* GET sản phẩm */
router.get('/san-pham', function(req, res, next) {
  res.render('san-pham', { title: 'Sản phẩm', noidung: 'Đây là nội dung được chuyền' });
});

/* GET fedu */
router.get('/fedu', function(req, res, next) {
  var dulieu = {
    danhsachsv : ["viet", "nga", "my", "hien", "an nhien"]
  };
  res.render('fedu', { title: 'fedu', dulieu: dulieu });
});

// Get Trang about
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Trang about'});
});
// Get post
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Trang post'});
});
// Get post
router.get('/sp/:chisosanpham/:gia', function(req, res, next) {
  res.send("Mã sản phẩm là: " + req.params.chisosanpham + " Giá sản phẩm: " + req.params.gia);
});

// Get post
router.get('/*.:mabaiviet', function(req, res, next) {
  res.send("Link kiểu tinh tế" + req.params.mabaiviet);
});


// Get contact
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Trang contact'});
});


module.exports = router;
