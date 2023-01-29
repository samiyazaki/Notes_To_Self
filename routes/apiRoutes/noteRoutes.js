const router = require("express").Router();
const {notes} = require('../../db/db.json');
const {createNote} = require ('../../lib/noteFunctions');

router.get('/notes', (_req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

module.exports = router;