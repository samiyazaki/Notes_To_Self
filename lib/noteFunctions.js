const fs = require("fs"); // import file system
const path = require("path"); // import path 

function createNote(body, notesArray) { //Function to create a note
  const note = body; 
  notesArray.push(note); //Adding the note to the array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"), // Writing it as a JSON file and storing it
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );

  return note;
}
// Exporting the function to use in other modules
module.exports = createNote;
