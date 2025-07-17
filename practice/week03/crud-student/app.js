/**
 * @file app.js
 * @description This server supports CRUD operations on student mongoDB model
 * @requires express mongoose ./models
 */
const express = require('express');
const { Student } = require('./models');

const app = express();
const port = 8080;

// Middleware to pre-process posted data
app.use(express.urlencoded({extended: true}))

/* Defin routes */
// Receive student info posted and Create (Add) a new student to database
app.post('/students', (req, res) => {
    
    // Receive student info posted
    const student = new Student(req.body);
    
    // Display student info to console for review
    console.log(student);
    
    // Save to database
    student.save()
            .then((student) => {
                    console.log("New student added");
                    res.send(student)
                })
            .catch((error) => {
                console.log(error.message);
                res.send(error)
            });
});

// Read all students from database
app.get('/students', (req, res) => {
    console.log(req.path);
    Student.find({})
            .then((students) => res.send(students))
            .catch((error) => res.send(error));
});

// Read a student by ID
app.get('/students/:id', (req, res) => {
    console.log(req.path);
    Student.findById(req.params.id)
            .then((student) => {
                if (!student) { // if not found
                    return res.send()
                }  
                res.send(student)
            })
            .catch((error) => {
                console.log(error.message);
                res.send(error)
            })

});

// Update a student by ID
app.post('/students/:id/update', (req, res) => {
    
    Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((student) => {
                if(!student) {
                    return res.send();
                }
                console.log(`Updated info: ${student}`);
                res.send(student);
            })
            .catch((error) => {
                console.log(`Update not done. The reason is ${error.message}`);
                res.send(error)
            });
});

// Delete a student by ID
app.post('/students/:id/delete', (req, res) => {
    Student.findByIdAndDelete(req.params.id)
            .then((student) => {
                if(!student) { // if not found
                    return res.send();
                }
                res.send(student);
            })
            .catch((error) => res.send(error));
})


app.listen(port, () => console.log(`Server is listening on port ${port}`));
