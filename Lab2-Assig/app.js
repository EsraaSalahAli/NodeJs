// -------------------Questyion 1------------------- //

var EventEmitter = require('events');
var util = require('util');

function SayHello() {
    this.Greeting = 'Hello';
}

util.inherits(SayHello, EventEmitter);

SayHello.prototype.Greet = function (name, data) {
    console.log(this.Greeting);
    console.log(name);
    this.emit('Greet', data);
}

var Greetr = new SayHello();

Greetr.on('Greet', function (data) {
    console.log('From ' + data + ' :)');
})

Greetr.Greet('Mohamed', 'ITI');

console.log("****************************************************************")


// -----------Questyion 2-------------- //

var fs = require('fs');

var Content = fs.readFileSync('greet.txt', 'utf-8');
Content.split(/\r?\n/).forEach(line =>  {
  console.log(`Line from file: ${line}`);
});

console.log("****************************************************************")

//using readline//

var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: fs.createReadStream('greet.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

console.log("****************************************************************")


// --------------------Question 3----------------------- //

var fs=require('fs');


var content=fs.rename('test.txt', 'info.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });

  console.log("****************************************************************")

//  ----------------------Question 4----------------------- //

var fs = require('fs');

var content=fs.unlink('./info.txt',function(err){
    if(err) {
    return console.log(err);
    }
    console.log('file deleted successfully');
});

console.log("****************************************************************")


//  -------------------Question 5----------------------  //

//sync

var fs=require('fs');

var content=fs.readFileSync('./data.json','utf-8');
console.log(content);
console.log('done :)');

console.log("****************************************************************")


//async

var fs=require('fs');

fs.readFile("./data.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
  });

console.log('done :)');

console.log("****************************************************************")


// ----------------------Question 6--------------------------- //



const fs = require('fs');

const content = 'hello iti';

fs.writeFile('./info.txt', content, err => {
  if (err) {
    console.error(err);
  }
  console.log('file written successfully');
});

console.log("****************************************************************")


// -------------------------Question 7-------------------------- //

var fs = require('fs');

fs.mkdir('./NewDir', { recursive: true }, (err) => {
  if (err) throw err;
});