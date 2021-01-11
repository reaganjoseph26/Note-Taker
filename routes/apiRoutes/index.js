const router = require("express").Router()
const fs = require("fs");
const {createNewNote, deleteNote} = require("../../lib/notes");
const notes = require("../../db/db");
const { v4: uuidv4 } = require('uuid');
const path = require("path");



router.get("/notes", (req, res) => {
   
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
  
  const newNote = deleteNote(id, notes)
  
  res.json(newNote)
 // res.sendFile(path.join(__dirname, "../../public/index.html"))
  
})


module.exports = router 

