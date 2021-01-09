const router = require("express").Router()
const fs = require("fs");
const createNewNote = require("../../lib/notes");
const notes = require("../../db/db");

router.get("/notes", (req, res) => {
    console.log(notes)
    let results = notes;
  if (req.query) {
    res.json(results);
}
});

router.post("/notes", (req, res) => {

    req.body.id = notes.length.toString();

    const newNote = createNewNote(req.body, notes)
   
   res.json(newNote)
})


module.exports = router 

