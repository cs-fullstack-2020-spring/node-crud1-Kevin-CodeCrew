
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define a Mongoose database schema for Teachers
let TeacherSchema = new Schema(
    {
        teacherName: String,
        teacherEmail: {type:String,unique:true},
        teacherCourseFocus: String
    }
);

// Export the model schema
module.exports = mongoose.model('teacher',TeacherSchema);