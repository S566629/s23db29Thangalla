const mongoose = require("mongoose")
const instituteSchema = mongoose.Schema({
Name:  {
    type: String,
    required: true
},
Size: {
    type: String,
    required: true
},
year: {
    type: Number,
    min: 0,
    max: 3000
} 
})
module.exports = mongoose.model("institute",instituteSchema)


