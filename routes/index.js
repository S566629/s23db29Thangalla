var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saikumar Thangalla Muni Venkata' });
});

module.exports = router;
