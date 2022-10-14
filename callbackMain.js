/*
This is proof of concept that we can read a YAML file, change it, and write it again. 

See the synchronousMain, this is just an example of the callback form of fs.readFile.

There are different readfiles available in the fs library. 
fs.readFile         //callback based
fs.readFileSynch    //synchronous version
fsPromises.readFile //uses promises


*/

//Setup stuff
const fs = require('fs');                     //need for readfile and writefile
const YAML = require('yaml');       //need for yaml conversions
const path = require('node:path');            //need for pathnames


let text;
let objectOrArray;

//Read the file off the HD.
fs.readFile(path.join(__dirname, './yamlexample'), 'utf8', (err, data) => {
  if (err) {
    console.error('Oops, it errored. ', err);
    return;
  }
  //save as text
  text = data;
  console.log(data)
  //parse it
  objectOrArray = YAML.parse(data);
  console.log(objectOrArray)
});



