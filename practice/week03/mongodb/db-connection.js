/**
 * @file db-connection.js
 * @description This program tests connection to a mongodb cluster, using mongoose package 
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Connect string found in mongoDB atlas
const connString = "mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/?retryWrites=true&w=majority&appName=cosc3060";

mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error)); 