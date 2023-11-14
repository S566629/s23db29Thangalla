var express = require('express');
const institute_controlers= require('../controllers/institute');
var router = express.Router();
/* GET costumes */
router.get('/', institute_controlers.institute_view_all_Page);

router.get('/detail', institute_controlers.institute_view_one_Page);
module.exports = router;

