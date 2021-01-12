const fs = require("fs");
const path = require("path");
const util = require('util');

const readFileWait = util.promisify(fs.readFile)


// create a new note 
function createNewNote(body, notesArray) {
  console.log(notesArray)
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return newNote;
}

function deleteNote(id, notesArray) {
  
  const newNotes = notesArray.filter(note => note.id !== id);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(newNotes, null, 2)
  );
  
  return newNotes;
}

function getNotes() {
  return readFileWait(path.join(__dirname, '../db/db.json'), 'utf8').then(notes => {
    return JSON.parse(notes);
  })
}

module.exports = { createNewNote, deleteNote, getNotes }