/**
 * @file db-create.js
 * @description This program checks the existence of a database in MongoDB Atlas.
 * @requires mongoose
 */

const mongoose = require('mongoose');
// Connect string found in MongoDB Atlas

const db = "db3";
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/retryWrites=true&w=majority&appName=cosc3060`;

mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message));

// Call the function after connection
mongoose.connection.once('open', () => {
    checkDatabaseExists(db);
});
    
// Check if the database exists
async function checkDatabaseExists(dbName) {
    try {
        // Get the native MongoDB client from Mongoose
        const client = mongoose.connection.getClient();
        const adminDb = client.db().admin();
        const dbs = await adminDb.listDatabases();
        const exists = dbs.databases.some(db => db.name === dbName);
        if (exists) {
            console.log(`Database '${dbName}' exists.`);
        } else {
            console.log(`Database '${dbName}' does NOT exist. Creating...`);
            
            // Use mongoose.createConnection to target the correct database
            const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=cosc3060`;
            const tempConn = mongoose.createConnection(connString);
            
            // Create a collection and insert a document to create the database in the correct db
            const tempSchema = new mongoose.Schema({ type: Date, default: Date.now });
            const TempModel = tempConn.model('TempCollection', tempSchema);
            await TempModel.create({});
            await tempConn.close();
            console.log(`Database '${dbName}' has been created with a collection 'TempCollection'.`);
        }
    } catch (err) {
        console.error('Error checking or creating database:', err.message);
    }
}

