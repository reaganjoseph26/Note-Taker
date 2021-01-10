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

function deleteNote(id, notesArray) {
  console.log("id: ", id);
  console.log("notes: ", notesArray);
  const newNotes = notesArray.filter(note => note.id !== id);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(newNotes , null, 2)
  );
  // console.log("newNotes: ", newNotes);
  return newNotes;
}



module.exports = {createNewNote, deleteNote}