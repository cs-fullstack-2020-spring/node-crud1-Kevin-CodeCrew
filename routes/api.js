// Routes for Teacher/Student API
let express = require('express');
let router = express.Router();

// reference our models
let TeacherCollection = require('../models/TeacherSchema');
let StudentCollection = require('../models/StudentSchema');

/*
/ TEACHER CRUD ENDPOINTS
*/

// Get all teachers
router.get('/teacher', (req, res) => {
    console.log(`Getting all Teachers`);
    TeacherCollection.find({}, (errors, results) => {
        if (errors) { res.send(errors); }
        else { res.send(results); }
    })
});

// Get a specific teacher
router.get('/teacher/:email', (req, res) => {
    console.log(`Getting Teacher with email ${req.params.email}`);
    TeacherCollection.findOne(
        {
            teacherEmail: req.params.email
        }
        , (errors, results) => {
            if (errors) { res.send(errors); }
            else { res.send(results); }
        })
});

// Add a new teacher
router.post('/teacher', (req, res) => {
    console.log(`Create Teacher`);
    TeacherCollection.create(req.body, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

// Update a Teacher
router.put('/teacher/:email', (req, res) => {
    console.log(`Updating Teacher with email ${req.params.email}`);
    TeacherCollection.findOneAndUpdate({
        teacherEmail: req.params.email
    }, req.body, { new: true }, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

// Delete a Teacher
router.delete('/teacher/:email', (req, res) => {
    console.log(`Deleting Teacher with email ${req.params.email}`);
    TeacherCollection.findOneAndDelete({
        teacherEmail: req.params.email
    }, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

/*
/ STUDENT CRUD ENDPOINTS
*/

// Get all students
router.get('/student', (req, res) => {
    console.log(`Getting all students`);
    StudentCollection.find({}, (errors, results) => {
        if (errors) { res.send(errors); }
        else { res.send(results); }
    })
});

// Get a specific student
router.get('/student/:email', (req, res) => {
    console.log(`Getting student with email ${req.params.email}`);
    StudentCollection.findOne(
        {
            studentEmail: req.params.email
        }
        , (errors, results) => {
            if (errors) { res.send(errors); }
            else { res.send(results); }
        })
});

// Add a new student
router.post('/student', (req, res) => {
    console.log(`Create student`);
    StudentCollection.create(req.body, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

// Update a student
router.put('/student/:email', (req, res) => {
    console.log(`Updating student with email ${req.params.email}`);
    StudentCollection.findOneAndUpdate({
        studentEmail: req.params.email
    }, req.body, { new: true }, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

// Delete a student
router.delete('/student/:email', (req, res) => {
    console.log(`Deleting student with email ${req.params.email}`);
    StudentCollection.findOneAndDelete({
        studentEmail: req.params.email
    }, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});
(
// export router
module.exports = router;