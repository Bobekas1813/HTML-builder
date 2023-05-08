const fs = require('fs');
const path = require('path');

fs.unlink('./01-read-file/README.md', () => { } );
let res = fs.createReadStream(path.join(__dirname, 'text.txt'));
res.on('data', (chunk) => {
  console.log(chunk.toString())
});