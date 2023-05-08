const fs = require('fs');
const path = require('path');

fs.mkdir('./04-copy-directory/files-copy', ()=> { });
fs.readdir('./04-copy-directory/files',{withFileTypes: true}, (err, list) => {
    list.forEach((item) => {
        fs.readFile(`./04-copy-directory/files/${item.name}`,'utf-8', (err, data) => { 
            fs.writeFile(`./04-copy-directory/files-copy/${item.name}`, data, () => { })
        });
    })
})





