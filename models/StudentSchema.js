
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define a Mongoose database schema for Students
let StudentSchema = new Schema(
    {
        studentName: String,
        studentEmail: {type:String,unique:true}
    }
);

// Export the model schema
module.exports = mongoose.model('student',StudentSchema);