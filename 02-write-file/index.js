const readline = require('readline');
const fs = require('fs');
const EventEmitter = require('events');
const path = require('path');
const process = require('process')
const emitter = new EventEmitter();
fs.writeFile('./02-write-file/text.txt','', () => { });


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let res;
let str = '';
reader.question('Enter something:  ', something => {
   if(something == 'exit'){
 
     reader.close();
    console.log('Buy-buy-buy')
    }
  fs.writeFile('./02-write-file/text.txt',something, () => { });
  res = fs.createReadStream(path.join(__dirname,'text.txt'));
  res.on('data', (chunk) => {
    str = chunk.toString()
  });
   reader.on('SIGINT', () => {
      console.log('Buy-buy-buy');
      reader.close();
   })
   reader.on('line', (something) => {
    if(something == 'exit'){
      reader.close();
     console.log('Buy-buy-buy,my dear mate')
     }else{
    res = fs.createReadStream(path.join(__dirname,'text.txt'));
    res.on('data', (chunk) => {
      str = chunk.toString()
    });
    fs.writeFile('./02-write-file/text.txt',str + something, () => { });
    res = fs.createReadStream(path.join(__dirname,'text.txt'));
    res.on('data', (chunk) => {
      str = chunk.toString()
    });
  }
   })
 
})






