/**
 * @file cmdline-arguments.js
 * @author Tuan Tran
 * @version 1.0
 * @date 2025-02-01
 * @description This program lists all provided command line arguments 
 */

const path = require('path');

console.log("You provide " + process.argv.length + " command line arguments.");
console.log("They are: ")
for(let i=0; i < process.argv.length; i++) {
    // console.log(`Argument ${i+1}: ${process.argv[i]}`);
    console.log(`- Argument ${i+1}: ${path.basename(process.argv[i])}`);
}