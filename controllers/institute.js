var institute = require('../models/instituteSchema');
// List of all institute

// List of all Costumes
exports.institute_list = async function(req, res) {
    try{
    theinstitute = await institute.find();
    res.send(theinstitute);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    
    
    
exports.institute_list = function(req, res) {
res.send('NOT IMPLEMENTED: institute list');
};
// for a specific institute.
exports.institute_detail = function(req, res) {
res.send('NOT IMPLEMENTED: institute detail: ' + req.params.id);
};
// Handle institute create on POST.
exports.institute_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: institute create POST');
};
// Handle institute delete form on DELETE.
exports.institute_delete = function(req, res) {
res.send('NOT IMPLEMENTED: institute delete DELETE ' + req.params.id);
};
// Handle institute update form on PUT.
exports.institute_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: institute update PUT' + req.params.id);
};
