/**
 * @description This program demonstrates a 1-to-1 relationship between 2 documents
 */
const { getConnString } = require('../dbsupport');
const mongoose = require('mongoose');

// Make connection tring
const db = "studentDB";
const connstr = getConnString(db);

// Connect MongoDB Atlas
mongoose.connect(connstr)
        .then(() => console.log(`Successfully connected to ${db}`))
        .catch((error) => console.log(`Failed to connect to ${db}. Error: ${error.message}`));

// Student Schema and Model
const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    ID: {type: String, required: true},
    address: {
        street: String,
        city: String,
    }
});

const Student = new mongoose.model("Student", studentSchema);

// Sample data
const s1 = {name: "Ngoc Nguyen", ID: "s4101234", address: { street: "Nguyen Van Linh", city: "HCM"}};
const s2 = {name: "Minh Le", ID: "s4104321", address: { street: "Le Loi", city: "HCM"}};
const s3 = {name: "Quan Tran", ID: "s4104312", address: { street: "Vo Thi Sau", city: "HCM"}};
const students = [s1, s2, s3]

students.forEach((s) => {
    const student = new Student(s);
    student.save()
            .then(() => console.log(`${student.name} saved in DB`))
            .catch((error) => console.error(`${error.message}`));
})