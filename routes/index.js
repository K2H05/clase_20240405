var express = require('express');
var router = express.Router();

/* GET home page. */

// request
// response
// next

router.get('/', function(req, res, next) {
  res.render('index'  );
});

module.exports = router;