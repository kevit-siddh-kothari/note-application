//taking error and log property from console object
const { error, log } = require("console");

// taking fs module in fs variable
const fs = require("fs");

//Adding Notes to JSON File
function addNote(title, body) {
  const notes = loadNotes();
  const duplicates = notes.filter((note) => note.title === title);
  debugger;
  let a = title.replaceAll(" ", "");
  let b = body.replaceAll(" ", "");
  if (a != "" && b != "" && duplicates.length === 0) {
    let p = title.trim().replaceAll(" ", "");
    let q = body.trim().replaceAll(" ", "");
    notes.push({ title: p, body: q });
    saveNotes(notes);
  } else {
    console.error("LEAVE FROM HERE!!!!!");
  }
}

//removing Notes to JSON file
function removeNote(a) {
  fs.readFile("./1_JSON.json", "utf-8", (err, data) => {
    let newData;
    let p = JSON.parse(data);
    if (!err) {
      newData = p.filter((b) => {
        if (b.title !== a) {
          return b;
        }
      });
    }
    fs.writeFileSync("./1_JSON.json", JSON.stringify(newData), "utf-8");
  });
}

//Listing all notes title from JSON file
function listNote() {
  const a = loadNotes();
  return a.forEach((a) => {
    console.log(a.title);
  });
}

//Readin A particular Note from JSON file
function ReadNote(a) {
  const b = loadNotes();
  return b.find((x) => x.title === a);
}

//Converting all String data of JSON file to its orignal datatype
//here it returns array of objects
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./1_JSON.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    console.log("[]");
    return [];
  }
};

//to save notes by modifying something
const saveNotes = function (a) {
  let ans = JSON.stringify(a); //how many parameters?
  fs.writeFileSync("./1_JSON.json", ans);
};

//exporting required functions
module.exports = {
  addNote,
  removeNote,
  listNote,
  ReadNote,
};
