const express = require("express"); // Import the express module
const api = require("./routes/apiRoutes"); // Import the API routes module
const html = require("./routes/htmlRoutes"); // Import the html routes module
const fs = require("fs"); // Import the file system operations
const path = require("path"); // Import the path module
const PORT = process.env.PORT || 3001; // Setting the port to whatever Heroku wants or 3001

const app = express(); // Create express app
app.use(express.static("public")); // Serve static files from the public directory
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse the incoming URL encoded requests
app.use("/api", api); // Use the API routes for all /api requests
app.use("/", html); // Use the HTML routes for everything else

app.listen(PORT, () => { // Start the server and log the message to the console
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
