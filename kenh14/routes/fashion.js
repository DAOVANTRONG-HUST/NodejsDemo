var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.json({trong : "Đây là trang homepage của fashion !!!"});
  });
  
// Trang fashion một
router.get('/mot-14.chn', function(req, res, next) {
    res.send('Day la trang fashion > Làm đẹp')
  });
  
router.get('/star-style.chn', function(req, res, next) {
    res.send('Day la trang fashion > start style')
  });
router.get('/fashion-icon.chn', function(req, res, next) {
    res.send('Day la trang fashion > fashion-icon.chn')
  });

  module.exports = router;