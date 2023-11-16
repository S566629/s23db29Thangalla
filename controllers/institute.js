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
    console.log(theinstitutes);
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
document.year = req.body.year;
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
exports.institute_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await institutes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
    
// Handle institute create on POST.
/*exports.institute_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: institute create POST');
};*/
// Handle institute delete form on DELETE.
//Handle Costume delete on DELETE.
exports.institute_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await institutes.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle institute update form on PUT.
// Handle Costume update form on PUT.
exports.institute_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
      let toUpdate = await institutes.findById(req.params.id);
   
      // Do updates of properties
      if (req.body.Name) toUpdate.Name = req.body.Name;
      if (req.body.Size) toUpdate.Size = req.body.Size;
      if (req.body.year) toUpdate.year = req.body.year;
   
      let result = await toUpdate.save();
      console.log("Success " + result)
      res.send(result);
    } catch (err) {
      res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }};
    //Handle a show one view with id specified by query

    exports.institute_view_one_Page = async function(req, res) {
      console.log("single view for id " + req.query.id)
      try{
      result = await institutes.findById( req.query.id)
      res.render('institutedetail',
      { title: 'institute Detail', toShow: result });
      }
      catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
      }
      };

      // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.institute_create_Page = function(req, res) {
console.log("create view")
try{
res.render('institutecreate', { title: 'institute Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for updating a costume.
// query provides the id
exports.institute_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await institutes.findById(req.query.id)
res.render('instituteupdate', { title: 'institute Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

exports.institute_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await institutes.findById(req.query.id)
  res.render('institutedelete', { title: 'Institute Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
 
  

