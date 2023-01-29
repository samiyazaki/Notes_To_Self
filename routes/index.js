const app = require('express').Router();
const dataBase = require('../db/db');


app.get('/notes', (req, res) => {
    dataBase 
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

app.post('/notes', (req, res) => {
    console.log(req.body)
    dataBase
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

app.delete('/notes/:id', (req, res) => {
    dataBase
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = app;