const router = require("express").Router()
const fs = require("fs");
const {createNewNote, deleteNote} = require("../../lib/notes");
const notes = require("../../db/db");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    console.log(notes)
    let results = notes;
  if (req.query) {
    res.json(results);
}
});

router.post("/notes", (req, res) => {

  req.body.id = uuidv4()

  const newNote = createNewNote(req.body, notes)
   
   res.json(newNote)
})

//bonus delete function
router.delete("/notes/:id", (req, res)=> {
 
  const id = req.params.id
  deleteNote(id.slice())
  res.sendStatus(204)
})

// router.delete("/notes/:id", (req, res) => {
//   const id = req.params.id;
//   // TODO: Delete our note...
//   res.sendStatus(204);
// });

module.exports = router 

