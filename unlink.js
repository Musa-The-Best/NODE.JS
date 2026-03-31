var fs = require('fs');
fs.unlink('newfile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});