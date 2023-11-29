const mongoose = require("mongoose")
const instituteSchema = mongoose.Schema({
Name: String,
Size: String,
year: {
    type: Number,
    min: 0,
    max: 3000
} 
})
module.exports = mongoose.model("institute",instituteSchema)


