const fs = require('fs');
const path = require('path');

fs.readdir('./05-merge-styles/styles',{withFileTypes: true},(err, list) => { 
  let arr = [];
  let str = '';
  if(err) {
   console.log(err);
  }else{
   list.forEach((item) => {
    
    let ext = path.extname(`./05-merge-styles/styles/${item.name}`);
    if(ext == '.css') {
      let res = fs.createReadStream(`./05-merge-styles/styles/${item.name}`);
      res.on('data', (chunk) => {
        fs.writeFile(`./05-merge-styles/project-dist/bundle.css`,chunk.toString(), () => { })
      });
    }
   })

  }
 });




