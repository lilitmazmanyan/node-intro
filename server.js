const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
});

app.use('/test', (reg, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The Test Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("Middleware");
    res.send();
});

const PORT = 4545;
app.listen(PORT)

