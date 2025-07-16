/**
 * @file db-connection.js
 * @description This program tests connection to a mongodb database, using mongoose package 
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Connect string found in mongoDB atlas
const db = "db1";
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message)); 