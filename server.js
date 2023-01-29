const express = require('express');
const api = require('./routes/index');
const html = require('./routes/html')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/api', api);
app.use('/', html);
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log('App listening at http://localhost:${PORT} 🚀')
);
