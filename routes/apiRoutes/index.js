const router = require("express").Router(); // Import the express.router function
const noteRoutes = require("./noteRoutes"); // Import the noteRoutes 

router.use(noteRoutes); 

module.exports = router; // Exporting for use in other modules
