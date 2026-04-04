const fs = require('fs');
const filePath = 'Musa.txt';
const newContent = 'Hello! This file has been updated using Node.js.';
fs.writeFile(filePath, newContent, (err) => {
    if (err) {
        console.log('Error writing to file:', err);
    } else {
        console.log('File updated successfully!');
    }
});