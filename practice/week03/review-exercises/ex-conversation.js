/**
 * @file ex-conversation.js
 * @description This program receives simple questions from the user and responds with a simple answer.
 * @author Tuan Tran    
 * @date 2025-02-20
 * @version 1.0.0
 * @license MIT
 * @requires readline-sync   
 * @requires process
 * @requires console
 * @example node ex-conversation.js "Hello, how are you?"
 */

const readlineSync = require('readline-sync');

var question = process.argv[2] || "What is your name?"; // Get the question from command line arguments or use a default question
var answer = readlineSync.question(`${question} `); // Prompt the user for an answer
console.log(`Answer: ${answer}`); // Log the answer to the console