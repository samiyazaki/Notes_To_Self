const router = require("express").Router(); // Import the express.Router function
const { notes } = require("../../db/db.json"); // Import notes array from JSON
const {
    createNote,
    deleteNote
} = require('../../lib/noteFunctions'); // Import create note function

router.get("/notes", (_req, res) => { // Route to get all routes, added _to req to show it's deprecated
  res.json(notes);
});

router.post("/notes", (req, res) => { // Route to create new note
  req.body.id = notes.length.toString(); // Setting the id to the next index of the notes array
  let note = createNote(req.body, notes); // Creating a new note using the createNote function from earlier
  res.json(note);
});
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})
module.exports = router; // Exporting the module again
