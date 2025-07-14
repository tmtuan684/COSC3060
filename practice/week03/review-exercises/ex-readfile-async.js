/**
 * @file ex-readfile-sync.js
 * @description This program reads a text file and prints its content to the console in asynchronous mechanism.
 * @author Tuan Tran
 * @date 2025-02-20
 * @version 1.0.0
 * @license MIT
 * @requires fs
 * @example node ex-readline.js [fileName]
 */

const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) {
    console.error("Please provide a file name. The program's syntax is node ex-readline.js [fileName].");
    process.exit(1);
}
// Read the file asynchronously
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${fileName}:`, err);
        process.exit(1);
    }
    console.log(`Content of ${fileName}:\n${data}`);
});

