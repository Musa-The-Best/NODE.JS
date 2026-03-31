var fs = require('fs');

// Create a file named mynewfile3.txt:
fs.writeFile('mytextfile.txt', 'I change the content',
    function (err) {
        if (err) throw err;
        console.log('Content changed!');
    });