var express = require('express');
const institute_controlers= require('../controllers/institute');
var router = express.Router();
/* GET costumes */
router.get('/', institute_controlers.institute_view_all_Page);
module.exports = router;
