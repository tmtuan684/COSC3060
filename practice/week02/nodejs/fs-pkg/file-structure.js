/**
 * @file file-structure.js
 * @description This program demonstrates making of directory structure.
 * @author Tuan Tran
 * @version 1.0.0
 * @date 2025-02-01
 * @example node file-structure.js
 * @requires fs
 */

const fs = require('fs');

// using synchronous methods to create directories: program waits until a directory is made before doing the next job

// remove the 'project' folder if it exists
if(fs.existsSync('project')) {
    fs.rmSync('project', { recursive: true, force: true }); 
}
// Make a folder named 'practice'
fs.mkdirSync('project');

// Make two folders inside 'project': 'backend' and 'frontend'
fs.mkdirSync('project/frontend');
fs.mkdirSync('project/backend');

// Make a file named 'index.html' inside 'frontend'
fs.writeFileSync('project/frontend/template.txt', 'This is a template file for frontend.');

// Make a file named 'app.js' inside 'backend'
fs.writeFileSync('project/backend/app.js', 'This is the main application file for backend')
fs.writeFileSync('project/backend/instruction.txt', 'This is the instruction file project');

// copy the file 'instruction.txt' to 'project/frontend/instruction.txt'
fs.copyFileSync('project/backend/instruction.txt', 'project/frontend/instruction.txt');

