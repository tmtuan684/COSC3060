/**
 * @file models.js
 * @description This program connects to MongoDB and produces student model
 * @requires mongoose
 */
const mongoose = require('mongoose');

// Connection string
const db = "students";
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority&appName=cosc3060`;

// Connect to MongoDB
mongoose.connect(connString)
        .then(() => console.log("Successfully connected to MongoDB Atlas"))
        .catch((error) => console.log("Cannot connect to MongoDB Atlas. The error is : " + error.message()));

//Define student schema
const studentScheme = new mongoose.Schema({
    firstName: {type: String, required: true },
    lastName: {type : String, required: true },
    email: {type : String, required: true, unique: true},
    birthyear: Number
})

// Produce student model
const Student = mongoose.model("Student", studentScheme);

// Export model to be used in other files
module.exports = { Student };