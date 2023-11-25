var express = require('express');
const institute_controlers= require('../controllers/institute');
var router = express.Router();
//assignment-13
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', institute_controlers.institute_view_all_Page);

router.get('/detail', institute_controlers.institute_view_one_Page);
router.get('/create', institute_controlers.institute_create_Page);

router.get('/update',secured, institute_controlers.institute_update_Page);

router.get('/delete', institute_controlers.institute_delete_Page);

// assignment-13

    
    /* GET update costume page */
    router.get('/update', secured,
    institute_controlers.institute_update_Page);

module.exports = router;

