const fs = require('fs');
const path = require('path');


fs.readdir('./03-files-in-folder/secret-folder',{withFileTypes: true},(err, list) => { 
 if(err) {
  console.log(err);
 }else{
  list.forEach((item) => {
   if(item.isFile()) {
    fs.stat(`./03-files-in-folder/secret-folder/${item.name}`, (err, stats)=> {
      let n = path.extname(`./03-files-in-folder/secret-folder/${item.name}`);
      let nam = path.parse(`./03-files-in-folder/secret-folder/${item.name}`).name;
       console.log(`${nam} + ${n.slice(1, n.length)} + ${stats.size}B`);
      
    })
   }
  })
 }
});

