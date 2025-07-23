/**
 * @description This program demonstrates a 1-to-many relationship with embedded data between 2 documents
 */
const { getConnString } = require('../dbsupport');
const mongoose = require('mongoose');

// Make connection tring
const db = "studentDB2";
const connstr = getConnString(db);

// Connect MongoDB Atlas
mongoose.connect(connstr)
        .then(() => console.log(`Successfully connected to ${db}`))
        .catch((error) => console.log(`Failed to connect to ${db}. Error: ${error.message}`));

// Student Schema and Model
const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    ID: {type: String, required: true},
    email: [{ address: String, note: String },
            { address: String, note: String }
           ]
});

const Student = new mongoose.model("Student", studentSchema);

// Sample data
const s1 = {name: "Ngoc Nguyen", 
            ID: "s4101234", 
            email: [{ address: "s4101234@rmit.edu.vn", note: "university email"},
                    { address: "ngocnguyen@email.com", note: "personal email"}]
            };

const s2 = {name: "Minh Le", 
            ID: "s4104321", 
            email: [{ address: "s4104321@rmit.edu.vn", city: "university email"},
                    { address: "minhle@email.com", note: "personal email"}]
                };

const students = [s1, s2]

students.forEach((s) => {
    const student = new Student(s);
    student.save()
            .then(() => console.log(`${student.name} saved in DB`))
            .catch((error) => console.error(`${error.message}`));
})