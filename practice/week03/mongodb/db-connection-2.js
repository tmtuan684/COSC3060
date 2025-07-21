/**
 * @file db-connection.js
 * @description This program tests connection to a mongodb database, using mongoose package 
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Connect string found in mongoDB atlas
const connString = `mongodb+srv://<username>:<password>@tutorialcluster.27sof9i.mongodb.net/?retryWrites=true&w=majority&appName=<Cluster>`;

mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message)); 
