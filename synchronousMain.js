/*
This is proof of concept that we can read a YAML file, change it, and write it again. 

We will be using the yaml node modules. 
https://www.npmjs.com/package/yaml

We have example YAML and JSON files included. 

We are going to read them using fs...
and use the yaml libraries to convert them to objects that we can easily modify...
then convert them back to yaml files...
and write them to disk again. 

There are different readfiles available in the fs library. 
fs.readFile         //callback based
fs.readFileSynch    //synchronous version
fsPromises.readFile //uses promises


Node.js developers prefer asynchronous methods over synchronous methods as asynchronous methods 
never block a program during its execution, whereas the later does. 
Blocking the main thread is malpractice in Node.js, thus synchronous functions should only be used 
for debugging or when no other options are available. 

fs.writeFileSynch and .writeFile overwrite by default. 

*/

//Setup stuff
const fs = require('fs');                     //need for readfile and writefile
const YAML = require('yaml');       //need for yaml conversions
const path = require('node:path');            //need for pathnames


let text;
let objectOrArray;

//Let's do it synchronously... 
//Grab text out of file. 
text = fs.readFileSync(path.join(__dirname, './yamlexample'), 'utf8');
//parse into object
objectOrArray = YAML.parse(text);

console.log('text ...', typeof(text), text);

console.log('object or array is...', typeof(objectOrArray), objectOrArray);

//making changes
objectOrArray.pi = 3;
objectOrArray.xmas = false;

//Yup, they took. 
console.log('object or array after changes is...', typeof(objectOrArray), objectOrArray);

//stringify back to YAML file. 
newText = YAML.stringify(objectOrArray);

//write it back to the file
fs.writeFileSync("newYamlExample", newText);



