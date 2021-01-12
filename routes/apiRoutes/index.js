const router = require("express").Router()
const fs = require("fs");
const {createNewNote, deleteNote, getNotes} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');




router.get("/notes", (req, res) => {
  console.log('get notes')
    getNotes().then(results => {
      
      if (req.query) {
        res.json(results);
    }
    })

});

router.post("/notes", (req, res) => {
  getNotes().then(results => {
    
    req.body.id = uuidv4()

    const newNote = createNewNote(req.body, results)
    
    res.json(newNote)
  })

})

//bonus delete function
router.delete("/notes/:id", (req, res)=> {
  getNotes().then(results => {
    const id = req.params.id
  
  const newNote = deleteNote(id, results)
  
  res.json(newNote)

  })
  
  
})


module.exports = router 

