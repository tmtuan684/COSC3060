/**
 * @file cmdline-arguments.js
 * @author Tuan Tran
 * @version 1.0
 * @date 2025-02-01
 * @description This program lists all provided command line arguments and color each with chalk color 
 */

const path = require('path');
const chalk = require('chalk');

console.log("You provide " + process.argv.length + " command line arguments.");
console.log("They are: ")
for(let i=0; i < process.argv.length; i++) {
    const arg = process.argv[i];
    console.log(`Argument ${i+1} is ` +  chalk.white.bgRed.bold(path.basename(arg)));
}