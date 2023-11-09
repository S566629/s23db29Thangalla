var institutes = require('../models/instituteSchema');
// List of all institute

// List of all Costumes
exports.institute_list = async function(req, res) {
    try{
    theinstitute = await institutes.find();
    res.send(theinstitute);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.institute_view_all_Page = async function(req, res) {
    try{
    theinstitutes = await institutes.find();
    res.render('institute', { title: 'institute Search Results', results: theinstitutes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.institute_create_post = async function(req, res) {
console.log(req.body)
let document = new institutes();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.Name = req.body.Name;
document.Size = req.body.Size;
document.year = req.body.Year;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

    
    
    
    
/*exports.institute_list = function(req, res) {
res.send('NOT IMPLEMENTED in list: institute list');
};*/
// for a specific institute.
exports.institute_detail = function(req, res) {
res.send('NOT IMPLEMENTED in detail: institute detail: ' + req.params.id);
};
// Handle institute create on POST.
/*exports.institute_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: institute create POST');
};*/
// Handle institute delete form on DELETE.
exports.institute_delete = function(req, res) {
res.send('NOT IMPLEMENTED: institute delete DELETE ' + req.params.id);
};
// Handle institute update form on PUT.
exports.institute_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: institute update PUT' + req.params.id);
};
