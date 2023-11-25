var express = require('express');

var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var institute_controller = require('../controllers/institute');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/institute', institute_controller.institute_create_post);
// DELETE request to delete Costume.
router.delete('/institute/:id', institute_controller.institute_delete);
// PUT request to update Costume.
router.put('/institute/:id', institute_controller.institute_update_put);
// GET request for one Costume.
router.get('/institute/:id', institute_controller.institute_detail);
// GET request for list of all Costume items.
router.get('/institute', institute_controller.institute_list);


module.exports = router;

