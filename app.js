const express = require('express');

//** Initialize express app
const app = express();
app.use(express.json({limit: '50mb'}));

//** Test GET
app.get('/', (req, res) => {
    res.status(200).send("Server is ready to answer Your requests.");
});

//** Routes middlewares
app.use('/transactions', require('./routes/transaction'));

module.exports = app;
