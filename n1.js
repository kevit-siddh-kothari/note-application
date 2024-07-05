const { type } = require("os");
const { title } = require("process");
//before Es6
const methods = require("./method");
// import chalk from 'chalk' //chalk only works in ES6 import module
const yargs = require("yargs");
const log = console.log;
// import validator from 'validator';  //after Es6  "type":"module"

//if u acess the package and the packkage is already installed but we dont have the nodemodule file then just nun command npm install
// log(validator.isEmail('abc@abc.com'),' ',chalk.greenBright.bgWhite.bold('Validated sucessfully'));

// npm i nodemon - locally
// npm i nodemon -g  - global

//taking inputs from user
//in process object there is argv which gives the array of arguments we input
// log(process.argv[2])    // node n1.js Siddh  //return array of length 3. 1:version info 2:file location 3:arguments

//yargs
yargs.version("2.0.0");

//performing crud operations by yargs

//adding a command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      //title propertysetUp
      describe: "Note title", //dexription of title property
      demandOption: true, //compulsory for title input
      type: "string", //title return type must always be string
    },
    body: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },

  handler: (a) => {
    methods.addNote(a.title, a.body);
  },
});

//removing a command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      //title propertysetUp
      describe: "Note title", //dexription of title property
      demandOption: true, //compulsory for title input
      type: "string", //title type must always be string
    },
  },
  handler: (a) => {
    methods.removeNote(a.title);
  },
});

//reading
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      //title propertysetUp
      describe: "Note title", //dexription of title property
      demandOption: true, //compulsory for title input
      type: "string", //title type must always be string
    },
  },
  handler: (a) => {
    const c = methods.ReadNote(a.title);
    if(c===undefined){
      console.log(`No Item Found`)
    }else{
      console.log(c)
    }
  },
});

//listing
yargs.command({
  command: "list",
  describe: "listing al note",
  handler: () => {
     methods.listNote()
  },
});

log(yargs.argv) // instead of log we can also use yargs.parse()
yargs.parse();

//output
// kevit@kevit-OptiPlex-3000:~/Downloads/SID_NODEJS/NPM$ node n1.js --help
// n1.js [command]

// Commands:
//   n1.js add  Add a new note

// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number                                       [boolean]
// kevit@kevit-OptiPlex-3000:~/Downloads/SID_NODEJS/NPM$

// How to run the programe

// Downloads/SID_NODEJS/NPM$ node n1.js read --title='sony103'
// :~/Downloads/SID_NODEJS/NPM$ node n1.js list 
// :~/Downloads/SID_NODEJS/NPM$ node n1.js add --title='' --body=''
// :~/Downloads/SID_NODEJS/NPM$ node n1.js remove --title='' 