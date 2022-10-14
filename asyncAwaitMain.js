/*
This is proof of concept that we can read a YAML file, change it, and write it again. 

See the synchronousMain, this is just an example of the callback form of fs.readFile.

There are different readfiles available in the fs library. 
fs.readFile         //callback based
fs.readFileSynch    //synchronous version
fsPromises.readFile //uses promises


*/

//Setup stuff
const fs = require('fs/promises');                     //need for readfile and writefile
const YAML = require('yaml');       //need for yaml conversions
const path = require('node:path');            //need for pathnames


let text;
let objectOrArray;


example();

async function example(){
  text = await fs.readFile(path.join(__dirname, './yamlexample'), { encoding: 'utf8' });
  console.log('text ...', typeof(text), text);
  objectOrArray = YAML.parse(text);
  console.log('object or array is...', typeof(objectOrArray), objectOrArray);

  //Should be easy as pie to convert to an object, make our changes, and convert back. 
  objectOrArray.pi = 3;
  console.log('I changed the value of pi', objectOrArray);
}


