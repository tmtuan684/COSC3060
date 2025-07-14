/**
 * @file ex-readfile-sync.js
 * @description This program reads a text file and prints its content to the console in synchronous mechanism.
 * @author Tuan Tran
 * @date 2025-02-20
 * @version 1.0.0
 * @license MIT
 * @requires fs
 * @example node ex-readline.js [fileName]
 */

const fs = require('fs');
const chalk = require('chalk');

const fileName = process.argv[2];

// Check if file name is provided; otherwise inform program's syntax
if (!fileName) {
    console.error("Please provide a file name. The program's syntax is " + chalk.green.bold('node ex-readline.js [fileName]') + ".");
    process.exit(1);
}
// Read the file synchronously
try {
    const content = fs.readFileSync(fileName, 'utf8')
    console.log(`Content of ${fileName}:\n${content}`);
} catch (err) {
    console.error(`Error reading file ${fileName}:`, err);
    process.exit(1);
}

