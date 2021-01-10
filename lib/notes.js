const fs = require("fs");
const path = require("path");

// create a new note 
function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray , null, 2)
    );
    return newNote;
}

function deleteNote(id, notes) {
  console.log("id: ", id);
  console.log("notes: ", notes);
  const newNotes = notes.filter(note => note.id !== id);
  console.log("newNotes: ", newNotes);
  return newNotes;
}

// function deleteNote(id, notes) {
//   return notes.filter(note => note.id !== id);
// }

module.exports = {createNewNote, deleteNote}