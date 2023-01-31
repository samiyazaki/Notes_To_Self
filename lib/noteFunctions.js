const fs = require("fs"); // import file system
const path = require("path"); // import path 

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
  
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
  
    return note;
  }
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);
  
    notesArray.forEach((note, index) => note.id = index.toString());
  
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
}
  
// Exporting the function to use in other modules
module.exports = {createNote, deleteNote};
