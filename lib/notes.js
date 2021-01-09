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

function deleteNote(body, notesArray) {
  const deleteNote = body
  notesArray.remove(deleteNote)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray , null, 2)
  );
  return deleteNote

}

module.exports = createNewNote, deleteNote