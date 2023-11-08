const mongoose = require("mongoose")
const instituteSchema = mongoose.Schema({
Name: String,
Size: String,
year: Number
})
module.exports = mongoose.model("institute",instituteSchema)


