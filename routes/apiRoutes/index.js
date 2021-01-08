const router = require("express").Router()
const fs = require("fs");

// const {renderActiveNote
// } = require('../../public/assets/js/index')
const notes = require("../../db/db");

router.get("/notes", (req, res) => {
    console.log(notes)
    //  let results = notes
    // if(req.query) {
    //     results = renderActiveNote(req.query, results);
    // }
    // res.json(results)
});

router.post("/notes", (req, res) => {
 
   notes.push(req.body)
})
 

module.exports = router 

