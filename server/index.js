const express = require('express');
const config = require('./config.js');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>APP Series</h1>')
});

app.listen(config.port, () => {
    console.log(`The application is running on localhost:${config.port}`)
});
