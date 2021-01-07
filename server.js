const express = require('express');
const app = express();
const htmlRoutes = require("./routes/htmlRoutes")

// parse incoming string or array data
app.use(express.urlencoded({ extended: true })); 
//The express.urlencoded({extended: true}) method is a method built into Express.js. It takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object. 
//The extended: true option set inside the method call informs our server that there may be sub-array data nested in it as well, so it needs to look as deep into the POST data as possible to parse all of the data correctly.
// parse incoming JSON data
app.use(express.json());
app.use("/", htmlRoutes)



app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });