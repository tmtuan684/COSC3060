/**
 * This code demonstrates how to use the readline module in Node.js
 * to read input from the user in a command-line interface.
 * @file ex-readline.js 
 * @description This program prompts the user for their age and logs it to the console.
 * @author Tuan Tran
 * @reference_source https://www.geeksforgeeks.org/node-js/node-js-readline-module/
 * @version 1.0.0
 * @date 2025-02-01
 * @example node ex-readline.js
 * @requires readline
 */
const readline = require('readline');

// Create interface object to read user's input from console and present output to console
const rl = readline.createInterface(
        process.stdin, process.stdout);

// Set the prompt content         
rl.setPrompt(`What is your age? `);
// Display the prompt to the user 
rl.prompt();
// Event and callback function to handle user input
rl.on('line', (age) => { // 'line' event is emitted when the user inputs a line and presses Enter 
    console.log(`You are : ${age} years old.`);
    rl.close();
})
