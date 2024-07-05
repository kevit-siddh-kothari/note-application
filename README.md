# note-application
## Notes Application made from NodeJs Udemy course

## This Project is made with the help of Yargs module

### Operation followed by the application
  -  ADDING a note to .json file
  -  DELETING a note with its name in the database in .json file
  -  Listing all notes from .json file
  -  READING a particular note by its name from the database in .json file

### Documentation
  - kevit@kevit-OptiPlex-3000:~/Downloads/SID_NODEJS/NPM$ node n1.js --help
    n1.js [command]

  -  Options:
      --help     Show help                                                 [boolean]
      --version  Show version number                                       [boolean]

  - How to run the programe
    - Downloads/SID_NODEJS/NPM$ node n1.js read --title='sony103'  ###title field is compulsory
    - Downloads/SID_NODEJS/NPM$ node n1.js list
    - Downloads/SID_NODEJS/NPM$ node n1.js add --title='sony111' --body='message' ###title and body both field are compulsorry and no same title is allowed
    - Downloads/SID_NODEJS/NPM$ node n1.js remove --title='sony103'  ###title is compulsory

