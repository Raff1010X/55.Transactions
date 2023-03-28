const express = require('express');

//** Initialize express app
const app = express();

//** Validate body of incoming requests
// app.use(require('./utils/validate'));

//** Test GET
app.get('/', (req, res) => {
    res.status(200).send("Server is ready to answer Your requests.");
});

//** Routes middlewares

app.use('/transactions', require('./routes/transaction'));

//** Send response middleware
// app.use(require('./utils/sendResponse'));

//** Route not found middleware
// app.all('*', require('./routes/notFound'));

//** Error handling middleware
// app.use(require('./err/errorController')); // last middleware

module.exports = app;
