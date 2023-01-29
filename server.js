const express = require('express');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});
