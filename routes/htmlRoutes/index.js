const path = require("path"); // Importing path 
const router = require("express").Router(); // Importing express.Router

router.get("/notes", (_req, res) => { // Sending notes.html file
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (_req, res) => { // Sending index.html file
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router; // Exporting the routes module
